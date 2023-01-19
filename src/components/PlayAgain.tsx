interface IPlayAgain {
  gameWon: boolean;
  onClick: () => void;
}

const GameWon = () => {
  return (
    <div className="text-green-400 font-bold text-3xl my-10 font-gruppo">
      Game Won!!
    </div>
  );
};

const GameOver = () => {
  return (
    <div className="text-red-500 font-bold text-3xl my-10 font-gruppo">
      Game Over
    </div>
  );
};

const PlayAgain = (props: IPlayAgain) => {
  return (
    <>
      {props.gameWon === true ? <GameWon /> : <GameOver />}
      <div
        onClick={props.onClick}
        className="button h-12 w-[50%] mx-auto
            bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 
            rounded-full cursor-pointer select-none
            active:translate-y-2 
            transition-all duration-150 
            [box-shadow:0_8px_0_0_#1b6ff8,0_12px_0_0_#1b70f841]
            active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
            border-[1px] border-blue-400"
      >
        <span className="flex flex-col justify-center items-center h-full text-white text-lg font-gruppo">
          Play again
        </span>
      </div>
    </>
  );
};

export default PlayAgain;
