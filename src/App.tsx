import { useState } from "react";
import "./App.css";
import Board from "./components/Board";

function App() {
  const [gameDifficulty, setGameDifficulty] = useState<
    "easy" | "normal" | "hard" | "unknown"
  >("easy");

  return (
    <>
      <h1 className="text-3xl md:text-5xl">Counting Atoms Game</h1>
      {gameDifficulty === "unknown" ? (
        "select difficulty"
      ) : (
        <>
          <p className="p-5 md:p-10">
            Pick one or more numbers that sum to the number of React atoms
          </p>
          <Board gameDifficulty={gameDifficulty} />
        </>
      )}
    </>
  );
}

export default App;
