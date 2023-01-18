import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Game from "./pages/Game";

function App() {
  const [page, setPage] = useState("home");
  const [playerName, setPlayerName] = useState<string | null>(null);

  return (
    <>
      {page === "home" ? (
        <Home pageRouter={setPage} setPlayerName={setPlayerName} />
      ) : page === "leaderboard" ? (
        <Leaderboard pageRouter={setPage} />
      ) : page === "game" ? (
        <Game pageRouter={setPage} />
      ) : null}
    </>
  );
}

export default App;
