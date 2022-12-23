import Atom from "./Atom";
import utils from "../utils";

interface AtomsPanelInterface {
  quantity: number;
}

// This component is responsible for showing a passed number of atoms in the screen
const AtomsPanel = (props: AtomsPanelInterface) => {
  // Creates an array pf n elements, one for each atom that will appear in the screen
  const atoms: number[] = utils.range(1, props.quantity);

  return (
    <div className="h-[280px] p-1 text-center border-solid border-2 border-slate-700 md:w-1/2">
      {atoms.map((i) => (
        <Atom key={i} />
      ))}
    </div>
  );
};

export default AtomsPanel;
