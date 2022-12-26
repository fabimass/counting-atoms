import AtomsPanel from "./AtomsPanel";
import ButtonsPanel from "./ButtonsPanel";
import { useState } from "react";
import utils from "../utils";

// This component creates the panel for atoms and numbers and manages the game logic
const Board = () => {
  // The state of the game is made up of:
  //   - The number of atoms to guess
  //   - The list of available numbers to click
  //   - The list of candidate numbers (clicked numbers but lower than the number of atoms)
  const [numberOfAtoms, setNumberOfAtoms] = useState<number>(
    utils.random(1, 9)
  );
  const [availableNumbers, setAvailableNumbers] = useState<number[]>(
    utils.range(1, 9)
  );
  const [candidateNumbers, setCandidateNumbers] = useState<number[]>([]);

  // Candidates are wrong if the sum of them is greater than the number of atoms
  const candidatesAreWrong = utils.sum(candidateNumbers) > numberOfAtoms;

  // Game is over if

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
    <div className="md:flex">
      <div className="h-[280px] p-1 text-center border-solid border-2 border-slate-700 md:w-1/2">
        <AtomsPanel quantity={numberOfAtoms} />
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
  );
};

export default Board;
