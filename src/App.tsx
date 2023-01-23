import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import Difficulty from "./pages/Difficulty";
import Leaderboard from "./pages/Leaderboard";
import Game from "./pages/Game";

export type pageOptions = "home" | "difficulty" | "leaderboard" | "game";
export type difficultyOptions = "easy" | "normal" | "hard";

function App() {
  const [page, setPage] = useState<pageOptions>("home");
  const [playerName, setPlayerName] = useState<string | null>(null);
  const [gameDifficulty, setGameDifficulty] =
    useState<difficultyOptions | null>(null);

  const submitName = (name: string) => {
    setPlayerName(name);
    setPage("difficulty");
  };

  const submitDifficulty = (difficulty: difficultyOptions) => {
    setGameDifficulty(difficulty);
    setPage("game");
  };

  return (
    <>
      {page === "home" ? (
        <Home onSubmit={submitName} />
      ) : page === "difficulty" ? (
        <Difficulty onSubmit={submitDifficulty} />
      ) : page === "leaderboard" ? (
        <Leaderboard onExit={setPage} />
      ) : page === "game" ? (
        <Game
          playerName={playerName ? playerName : "Unknown"}
          gameDifficulty={gameDifficulty ? gameDifficulty : "normal"}
          onExit={setPage}
        />
      ) : null}
    </>
  );
}

export default App;
