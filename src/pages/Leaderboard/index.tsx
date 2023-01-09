import axios from "axios";

const Leaderboard = () => {
  // API call
  const getLeaderboard = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_FIREBASE_API_URL}/leaderboard.json`
    );
    console.log(response);
  };

  //getLeaderboard();

  const updateLeaderboard = () => {
    const response = axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${
          import.meta.env.VITE_FIREBASE_API_KEY
        }`
      )
      .then((resp) => console.log(resp.data.idToken));
  };

  updateLeaderboard();
  return <div>Leaderboard</div>;
};

export default Leaderboard;
