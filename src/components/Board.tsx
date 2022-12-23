import AtomsPanel from "./AtomsPanel";
import ButtonsPanel from "./ButtonsPanel";
import { useState } from "react";
import utils from "../utils";

// This component creates the panel for atoms and numbers and manages the game logic
const Board = () => {
  const [numberOfAtoms, setNumberOfAtoms] = useState<number>(
    utils.random(1, 9)
  );
  const [availableNumbers, setAvailableNumbers] = useState<number[]>(
    utils.range(1, 9)
  );
  const [candidateNumbers, setCandidateNumbers] = useState<number[]>([]);

  // Candidates are wrong if the sum of them is greater than the number of atoms
  const candidatesAreWrong = utils.sum(candidateNumbers) > numberOfAtoms;

  // Logic behind every click
  const onNumberClick = (
    num: number,
    currentStatus: "candidate" | "available" | "used" | "wrong"
  ) => {
    if (currentStatus === "used") {
      return null;
    }

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
      setCandidateNumbers(newCandidateNumbers);
    }

    return "ok";
  };

  return (
    <div className="md:flex">
      <AtomsPanel quantity={numberOfAtoms} />
      <ButtonsPanel
        available={availableNumbers}
        candidates={candidateNumbers}
        candidatesAreWrong={candidatesAreWrong}
        onClickHandle={onNumberClick}
      />
    </div>
  );
};

export default Board;
