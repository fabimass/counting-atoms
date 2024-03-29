import { useState, useEffect } from "react";
import utils from "../utils";
import settings from "../settings";
import { difficultyOptions } from "../App";
import getLeaderboard from "../services/getLeaderboard";
import checkLeaderboard from "../services/checkLeaderboard";
import updateLeaderboard from "../services/updateLeaderboard";

const useGameState = (
  gameDifficulty: difficultyOptions,
  playerName: string
) => {
  // The state of the game is made up of:
  //   - The number of atoms to guess
  //   - The list of available numbers to click
  //   - The list of candidate numbers (clicked numbers but lower than the number of atoms)
  //   - A flag that indicates if the player ran out of time
  //   - The current score
  //   - The available time when a hit was made
  //   - A flag that indicates if the player made it to the leaderboard
  const [numberOfAtoms, setNumberOfAtoms] = useState<number>(
    utils.random(1, settings.maxCount)
  );
  const [availableNumbers, setAvailableNumbers] = useState<number[]>(
    utils.range(1, settings.maxCount)
  );
  const [candidateNumbers, setCandidateNumbers] = useState<number[]>([]);
  const [timeIsOut, setTimeIsOut] = useState<boolean>(false);
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [timeSnapshot, setTimeSnapshot] = useState<number>(
    settings.timeAvailable[gameDifficulty]
  );
  const [playerIntoLeaderboard, setPlayerIntoLeaderboard] =
    useState<boolean>(false);

  // Candidates are wrong if the sum of them is greater than the number of atoms
  const candidatesAreWrong = utils.sum(candidateNumbers) > numberOfAtoms;

  // Game is over if there is no more available buttons
  const gameStatus =
    availableNumbers.length === 0
      ? "Won"
      : candidatesAreWrong || timeIsOut
      ? "Lost"
      : "inProgress";

  // Checks the leaderboard if the game is won
  useEffect(() => {
    if (gameStatus === "Won") {
      getLeaderboard()
        .then((data) => checkLeaderboard(playerScore, data))
        .then(([pos, leaderboard]) => {
          if (pos > 0) {
            setPlayerIntoLeaderboard(true);
            updateLeaderboard(playerName, playerScore, pos, leaderboard);
          }
        });
    }
  }, [playerScore]);

  // Logic behind every click
  const onNumberClick = (
    num: number,
    currentStatus: "candidate" | "available" | "used" | "wrong"
  ) => {
    // If the number is already used nothing happens
    if (currentStatus === "used") {
      return null;
    }

    // If you click on a candidate you reset it
    if (currentStatus === "candidate") {
      setCandidateNumbers(candidateNumbers.filter((n) => !(n === num)));
      return null;
    }

    // Temporarily add the clicked number to the list of candidate numbers
    const newCandidateNumbers = candidateNumbers.concat(num);

    // If the sum of the new candidates equals to the number of atoms, it is a correct match
    if (utils.sum(newCandidateNumbers) === numberOfAtoms) {
      // These new candidates should be removed from the available numbers
      const newAvailableNumbers = availableNumbers.filter(
        (n) => !newCandidateNumbers.includes(n)
      );
      setAvailableNumbers(newAvailableNumbers);
      // We need to reset the list of candidates
      setCandidateNumbers([]);
      // And also, we need to update the number of atoms
      setNumberOfAtoms(
        utils.randomSumIn(newAvailableNumbers, settings.maxCount)
      );
    } else {
      // If not, the new number becomes part of the candidates list for good
      setCandidateNumbers(newCandidateNumbers);
    }

    return null;
  };

  // Add points to the score when a new hit is made
  const calculateScore = (time: number) => {
    // This constraint is to prevent adding to the score in the first render
    if (time < settings.timeAvailable[gameDifficulty]) {
      // The score is calculated taking into account the difficulty, the numbers the player already guessed, and the remaining time available.
      // The more you progress the more points you get. The quicker you are the more points you get.
      const baseMod = 100;
      const difficultyMod = settings.scoreModifier[gameDifficulty];
      const timeMod =
        timeSnapshot - time > 0 ? 1 + 1 / (timeSnapshot - time) : 0.1;
      const hitsMod = 1 + (settings.maxCount - availableNumbers.length) / 10;
      const newScore = Math.round(baseMod * difficultyMod * timeMod * hitsMod);
      setTimeSnapshot(time);
      setPlayerScore((prevScore) => prevScore + newScore);
    }
  };

  // Reset game
  const resetGame = () => {
    setNumberOfAtoms(utils.random(1, settings.maxCount));
    setAvailableNumbers(utils.range(1, settings.maxCount));
    setCandidateNumbers([]);
    setTimeIsOut(false);
    setPlayerScore(0);
    setPlayerIntoLeaderboard(false);
  };

  return {
    gameStatus,
    numberOfAtoms,
    playerScore,
    playerIntoLeaderboard,
    availableNumbers,
    candidateNumbers,
    candidatesAreWrong,
    calculateScore,
    onNumberClick,
    setTimeIsOut,
    resetGame,
  };
};

export { useGameState };
