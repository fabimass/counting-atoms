import utils from "../utils";
import Atom from "./Atom";

interface IAtomsPanel {
  quantity: number;
}

// This component is responsible for showing a passed number of atoms in the screen
const AtomsPanel = (props: IAtomsPanel) => {
  // Creates an array pf n elements, one for each atom that will appear in the screen
  const atoms: number[] = utils.range(1, props.quantity);

  return (
    <div className="relative">
      {atoms.map((i) => (
        <Atom key={i} order={i} />
      ))}
    </div>
  );
};

export default AtomsPanel;
