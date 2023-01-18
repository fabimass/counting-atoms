import { useState } from "react";
import Board from "../../components/Board";
import DifficultySelector from "../../components/DifficultySelector";

interface IGame {
  pageRouter: (page: string) => void;
}

const Game = (props: IGame) => {
  const [gameDifficulty, setGameDifficulty] = useState<
    "easy" | "normal" | "hard" | "unknown"
  >("unknown");

  return (
    <>
      <h1 className="text-3xl md:text-5xl">Counting Atoms Game</h1>
      {gameDifficulty === "unknown" ? (
        <DifficultySelector onSelect={setGameDifficulty} />
      ) : (
        <>
          <p className="p-5 md:p-10">
            Pick one or more numbers that sum to the number of React atoms
          </p>
          <Board
            gameDifficulty={gameDifficulty}
            resetGameDifficulty={setGameDifficulty}
          />
        </>
      )}
    </>
  );
};

export default Game;
