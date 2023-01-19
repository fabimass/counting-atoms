import DifficultySelector from "../../components/DifficultySelector";
import { difficultyOptions } from "../../App";

interface IDifficulty {
  onSubmit: (difficulty: difficultyOptions) => void;
}

const Difficulty = (props: IDifficulty) => {
  return (
    <>
      <h1 className="text-3xl md:text-5xl font-gruppo">Counting Atoms Game</h1>
      <p className="p-5 md:p-10 text-xl font-gruppo">Pick your difficulty</p>
      <DifficultySelector onSelect={props.onSubmit} />
    </>
  );
};

export default Difficulty;
