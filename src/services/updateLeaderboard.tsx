import axios from "axios";

const updateLeaderboard = async (
  name: string,
  score: number,
  position: number,
  leaderboard: any
) => {
  console.log(name, score, position, leaderboard);
};

export default updateLeaderboard;
