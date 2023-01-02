import { useState, useEffect } from "react";
import utils from "../utils";
import Atom from "./Atom";

interface IAtomsPanel {
  quantity: number;
  difficulty: "easy" | "normal" | "hard";
}

// This component is responsible for showing a passed number of atoms in the screen
const AtomsPanel = (props: IAtomsPanel) => {
  // Creates an array of n elements, one for each atom that will appear in the screen
  const atoms: number[] = utils.range(1, props.quantity);

  // Creates an array to contain a random sequence of animations
  // I need to leverage useState and useEffect in order to prevent the animations from changing
  // when the player clicks on a candidate
  const [randomAnimations, setRandomAnimations] = useState(
    utils.shuffle(utils.range(1, 9))
  );

  // The array of animations gets shuffled again only when the number of atoms changes
  useEffect(() => {
    setRandomAnimations(utils.shuffle(utils.range(1, 9)));
  }, [props.quantity]);

  return (
    <div className="relative">
      {atoms.map((i) => (
        <Atom
          key={i}
          animation={props.difficulty === "hard" ? randomAnimations[i - 1] : -1}
        />
      ))}
    </div>
  );
};

export default AtomsPanel;
