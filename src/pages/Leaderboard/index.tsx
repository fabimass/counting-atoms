import { useEffect, useState } from "react";
import getLeaderboard from "../../services/getLeaderboard";
import Medal from "../../components/Medal";
import Atom from "../../components/Atom";

const Leaderboard = () => {
  const [table, setTable] = useState(null);
  /*
  const updateLeaderboard = () => {
    const response = axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${
          import.meta.env.VITE_FIREBASE_API_KEY
        }`
      )
      .then((resp) => console.log(resp.data.idToken));
  };

  updateLeaderboard();*/

  // Download the leaderboard data
  useEffect(() => {
    getLeaderboard().then((data) => setTable(data));
  }, []);

  return (
    <>
      <h1 className="text-3xl md:text-5xl font-goudy mx-auto">LEADERBOARD</h1>
      <table className="mx-auto text-md md:text-2xl font-papyrus border-separate border-spacing-y-10">
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
                <tr key={i}>
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
    </>
  );
};

export default Leaderboard;
