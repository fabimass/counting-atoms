import axios from "axios";

const getLeaderboard = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_FIREBASE_API_URL}/leaderboard.json`
  );
  return response.data;
};

export default getLeaderboard;
