// This function receives the current leaderboard and the score of the player.
// Returns the position that the player should take in the leaderboard or 0 if not applies.
const checkLeaderboard = (score: number, leaderboard: any) => {
  const players = Object.keys(leaderboard);
  console.log(leaderboard);
  for (let i = 0; i < players.length; i++) {
    if (score > leaderboard[players[i]].points) {
      return i + 1;
    }
  }
  return 0;
};

export default checkLeaderboard;
