import { useState } from "react";

interface IHome {
  setPage: (page: string) => void;
  setPlayerName: (name: string) => void;
}

const Home = (props: IHome) => {
  return (
    <>
      <h1 className="text-3xl md:text-5xl font-gruppo">Counting Atoms Game</h1>
      <p className="p-5 md:p-10 text-xl font-gruppo">What's your name?</p>
      <input
        className="px-10 py-2 border-solid border-2 border-gray-400 rounded-full"
        onChange={(e) => props.setPlayerName(e.target.value)}
      ></input>

      <div
        onClick={() => props.setPage("game")}
        className="button h-12 w-[50%] mx-auto font-gruppo mt-20
            bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 
            rounded-full cursor-pointer select-none
            active:translate-y-2 
            transition-all duration-150 
            [box-shadow:0_8px_0_0_#1b6ff8,0_12px_0_0_#1b70f841]
            active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
            border-[1px] border-blue-400"
      >
        <span className="flex flex-col justify-center items-center h-full text-white text-lg ">
          Start Game
        </span>
      </div>
    </>
  );
};

export default Home;
