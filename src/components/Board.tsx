import { useState, useEffect } from "react";
import utils from "../utils";
import settings from "../settings";
import AtomsPanel from "./AtomsPanel";
import ButtonsPanel from "./ButtonsPanel";
import PlayAgain from "./PlayAgain";
import CountDown from "./CountDown";

interface IBoard {
  gameDifficulty: "easy" | "normal" | "hard";
}

// This component creates the panel for atoms and numbers and manages the game logic
const Board = (props: IBoard) => {
  // The state of the game is made up of:
  //   - The number of atoms to guess
  //   - The list of available numbers to click
  //   - The list of candidate numbers (clicked numbers but lower than the number of atoms)
  //   - A flag that indicates if the player ran out of time
  //   - The current score
  const [numberOfAtoms, setNumberOfAtoms] = useState<number>(
    utils.random(1, settings.maxCount)
  );
  const [availableNumbers, setAvailableNumbers] = useState<number[]>(
    utils.range(1, settings.maxCount)
  );
  const [candidateNumbers, setCandidateNumbers] = useState<number[]>([]);
  const [timeIsOut, setTimeIsOut] = useState<boolean>(false);
  const [playerScore, setPlayerScore] = useState<number>(0);

  // Candidates are wrong if the sum of them is greater than the number of atoms
  const candidatesAreWrong = utils.sum(candidateNumbers) > numberOfAtoms;

  // Game is over if there is no more available buttons
  const gameStatus =
    availableNumbers.length === 0
      ? "Won"
      : candidatesAreWrong || timeIsOut
      ? "Lost"
      : "inProgress";

  // Reset game
  const resetGame = () => {
    setNumberOfAtoms(utils.random(1, settings.maxCount));
    setAvailableNumbers(utils.range(1, settings.maxCount));
    setCandidateNumbers([]);
    setTimeIsOut(false);
  };

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

  const onTimeRequest = (time: number) => {
    console.log("get time", time);
  };

  return (
    <div className="max-w-[700px]">
      <div className="md:flex">
        <div className="h-[280px] p-1 text-center border-solid border-2 border-slate-700 md:w-1/2">
          {gameStatus === "inProgress" ? (
            <AtomsPanel
              quantity={numberOfAtoms}
              difficulty={props.gameDifficulty}
            />
          ) : (
            <PlayAgain
              onClick={resetGame}
              gameWon={gameStatus === "Won" ? true : false}
            />
          )}
        </div>
        <div className="h-[280px] pb-5 text-center border-solid border-2 border-slate-700 md:w-1/2">
          <ButtonsPanel
            available={availableNumbers}
            candidates={candidateNumbers}
            candidatesAreWrong={candidatesAreWrong}
            onNumberClick={onNumberClick}
          />
        </div>
      </div>
      <CountDown
        enabled={gameStatus === "inProgress" ? true : false}
        onTimeOut={setTimeIsOut}
        maxValue={settings.timeAvailable[props.gameDifficulty]}
        timeRequester={availableNumbers}
        onTimeRequest={onTimeRequest}
      />
    </div>
  );
};

export default Board;
