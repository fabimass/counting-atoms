import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";

function App() {
  const [page, setPage] = useState("leaderboard");

  return (
    <>
      {page === "home" ? (
        <Home pageRouter={setPage} />
      ) : page === "leaderboard" ? (
        <Leaderboard pageRouter={setPage} />
      ) : null}
    </>
  );
}

export default App;
