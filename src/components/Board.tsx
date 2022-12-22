import AtomsPanel from "./AtomsPanel";
import ButtonsPanel from "./ButtonsPanel";
import { useState } from "react";
import utils from "../utils";

// This component creates the panel for atoms and numbers and manages the game logic
const Board = () => {
  const [numberOfAtoms, setNumberOfAtoms] = useState(utils.random(1, 9));
  const [availableNumbers, setAvailableNumbers] = useState([1, 2, 3, 4, 5]);
  const [candidateNumbers, setCandidateNumbers] = useState([2, 3]);

  // Candidates are wrong if the sum of them is greater than the number of atoms
  const candidatesAreWrong = utils.sum(candidateNumbers) > numberOfAtoms;

  return (
    <div className="md:flex">
      <AtomsPanel quantity={numberOfAtoms} />
      <ButtonsPanel
        available={availableNumbers}
        candidates={candidateNumbers}
        candidatesAreWrong={candidatesAreWrong}
      />
    </div>
  );
};

export default Board;
