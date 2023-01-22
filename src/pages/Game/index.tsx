import Board from "../../components/Board";
import { difficultyOptions, pageOptions } from "../../App";

interface IGame {
  setPage: (page: pageOptions) => void;
  playerName: string;
  gameDifficulty: difficultyOptions;
}

const Game = (props: IGame) => {
  return (
    <>
      <h1 className="text-3xl md:text-5xl font-gruppo">Counting Atoms Game</h1>

      <p className="p-5 md:p-10 font-gruppo">
        Pick one or more numbers that sum to the number of React atoms
      </p>
      <Board
        gameDifficulty={props.gameDifficulty}
        playerName={props.playerName}
      />
    </>
  );
};

export default Game;
