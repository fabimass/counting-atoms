import Board from "../../components/Board";

const Game = (props: any) => {
  return (
    <>
      <h1 className="text-3xl md:text-5xl font-gruppo">Counting Atoms Game</h1>

      <p className="p-5 md:p-10 font-gruppo">
        Pick one or more numbers that sum to the number of React atoms
      </p>
      <Board {...props} />
    </>
  );
};

export default Game;
