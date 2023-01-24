import axios from "axios";

const updateLeaderboard = async (
  playerName: string,
  playerScore: number,
  playerPosition: number,
  leaderboard: any
) => {
  const players = Object.keys(leaderboard);

  for (let i = players.length; i > 0; i--) {
    if (i == playerPosition) {
      leaderboard[players[i - 1]].name = playerName;
      leaderboard[players[i - 1]].points = playerScore;
      break;
    } else {
      leaderboard[players[i - 1]].name = leaderboard[players[i - 2]].name;
      leaderboard[players[i - 1]].points = leaderboard[players[i - 2]].points;
    }
  }

  const response = axios
    .post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${
        import.meta.env.VITE_FIREBASE_API_KEY
      }`
    )
    .then((resp) => {
      console.log(leaderboard);
      axios.put(
        `${import.meta.env.VITE_FIREBASE_API_URL}/leaderboard.json?auth=${
          resp.data.idToken
        }`,
        leaderboard
      );
    });
};

export default updateLeaderboard;
