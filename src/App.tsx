import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import DifficultySelector from "./components/DifficultySelector";
import axios from "axios";

function App() {
  const [gameDifficulty, setGameDifficulty] = useState<
    "easy" | "normal" | "hard" | "unknown"
  >("unknown");

  // API call
  const getLeaderboard = async () => {
    const response = await axios.get(
      "https://counting-atoms-default-rtdb.firebaseio.com/leaderboard.json"
    );
    console.log(response);
  };

  //getLeaderboard();

  const updateLeaderboard = () => {
    const response = axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${
          import.meta.env.VITE_FIREBASE_API_KEY
        }`
      )
      .then((resp) => console.log(resp.data.idToken));
  };

  updateLeaderboard();

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
}

export default App;
