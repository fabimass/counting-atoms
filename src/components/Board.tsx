import { useState } from "react";
import utils from "../utils";
import AtomsPanel from "./AtomsPanel";
import ButtonsPanel from "./ButtonsPanel";
import PlayAgain from "./PlayAgain";
import CountDown from "./CountDown";

// This component creates the panel for atoms and numbers and manages the game logic
const Board = () => {
  // The state of the game is made up of:
  //   - The number of atoms to guess
  //   - The list of available numbers to click
  //   - The list of candidate numbers (clicked numbers but lower than the number of atoms)
  //   - A flag thta indicates if the player ran out of time
  const [numberOfAtoms, setNumberOfAtoms] = useState<number>(
    utils.random(1, 9)
  );
  const [availableNumbers, setAvailableNumbers] = useState<number[]>(
    utils.range(1, 9)
  );
  const [candidateNumbers, setCandidateNumbers] = useState<number[]>([]);
  const [timeIsOut, setTimeIsOut] = useState(false);

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
    setNumberOfAtoms(utils.random(1, 9));
    setAvailableNumbers(utils.range(1, 9));
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
      setNumberOfAtoms(utils.randomSumIn(newAvailableNumbers, 9));
    } else {
      // If not, the new number becomes part of the candidates list for good
      setCandidateNumbers(newCandidateNumbers);
    }

    return null;
  };

  return (
    <div className="max-w-[700px]">
      <div className="md:flex">
        <div className="h-[280px] p-1 text-center border-solid border-2 border-slate-700 md:w-1/2">
          {gameStatus === "inProgress" ? (
            <AtomsPanel quantity={numberOfAtoms} difficulty={"hard"} />
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
      />
    </div>
  );
};

export default Board;
