import { useEffect, useState } from "react";
import getLeaderboard from "../../services/getLeaderboard";
import Medal from "../../components/Medal";

interface ILeaderboard {
  onExit: any;
}

const Leaderboard = (props: ILeaderboard) => {
  const [table, setTable] = useState(null);

  // Download the leaderboard data
  useEffect(() => {
    getLeaderboard().then((data) => setTable(data));
  }, []);

  return (
    <>
      <h1 className="text-4xl md:text-5xl font-gruppo text-teal-400 mx-auto">
        LEADERBOARD
      </h1>
      <table className="mx-auto text-md md:text-2xl font-gruppo border-separate border-spacing-y-8">
        <thead>
          <tr>
            <th className="w-[400px]">Position</th>
            <th className="w-[400px]">Name</th>
            <th className="w-[400px]">Score</th>
          </tr>
        </thead>
        <tbody>
          {table
            ? Object.entries(table).map(([player, data]: any, i) => (
                <tr className="h-[50px]" key={i}>
                  <td>
                    <Medal place={i + 1} />
                  </td>
                  <td>{data.name}</td>
                  <td>{data.points}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
      <div
        onClick={() => props.onExit("home")}
        className="button h-12 w-[50%] mx-auto font-gruppo mt-5
            bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 
            rounded-full cursor-pointer select-none
            active:translate-y-2 
            transition-all duration-150 
            [box-shadow:0_8px_0_0_#1b6ff8,0_12px_0_0_#1b70f841]
            active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
            border-[1px] border-blue-400"
      >
        <span className="flex flex-col justify-center items-center h-full text-white text-lg ">
          Play
        </span>
      </div>
    </>
  );
};

export default Leaderboard;
