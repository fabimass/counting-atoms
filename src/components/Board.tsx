import AtomsPanel from "./AtomsPanel";
import ButtonsPanel from "./ButtonsPanel";
import { useState } from "react";
import utils from "../utils";

// This component creates the panel for atoms and numbers and manages the game logic
const Board = () => {
  const [numberOfAtoms, setNumberOfAtoms] = useState(utils.random(1, 9));

  return (
    <div className="md:flex">
      <AtomsPanel quantity={numberOfAtoms} />
      <ButtonsPanel />
    </div>
  );
};

export default Board;
