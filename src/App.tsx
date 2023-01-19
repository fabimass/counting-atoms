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

  const resetState = () => {
    setPlayerName(null);
    setGameDifficulty(null);
  };

  // Show the difficulty picker after submitting a name
  useEffect(() => {
    if (playerName) {
      setPage("difficulty");
    }
  }, [playerName]);

  // Open the game after picking difficulty
  useEffect(() => {
    if (gameDifficulty) {
      setPage("leaderboard");
    }
  }, [gameDifficulty]);

  return (
    <>
      {page === "home" ? (
        <Home onSubmit={setPlayerName} />
      ) : page === "difficulty" ? (
        <Difficulty onSubmit={setGameDifficulty} />
      ) : page === "leaderboard" ? (
        <Leaderboard onSubmit={setPage} onLoad={resetState} />
      ) : page === "game" ? (
        <Game
          playerName={playerName ? playerName : "Unknown"}
          gameDifficulty={gameDifficulty ? gameDifficulty : "normal"}
          setPage={setPage}
        />
      ) : null}
    </>
  );
}

export default App;
