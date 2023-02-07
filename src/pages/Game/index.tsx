import settings from "../../settings";
import { useGameState } from "../../hooks/useGameState";
import AtomsPanel from "../../components/AtomsPanel";
import ButtonsPanel from "../../components/ButtonsPanel";
import PlayAgain from "../../components/PlayAgain";
import CountDown from "../../components/CountDown";
import { Fireworks } from "@fireworks-js/react";
import { difficultyOptions, pageOptions } from "../../App";

interface IGame {
  gameDifficulty: difficultyOptions;
  playerName: string;
  onExit: (page: pageOptions) => void;
}

const Game = (props: IGame) => {
  const {
    gameStatus,
    numberOfAtoms,
    playerScore,
    playerIntoLeaderboard,
    availableNumbers,
    candidateNumbers,
    candidatesAreWrong,
    calculateScore,
    onNumberClick,
    setTimeIsOut,
    resetGame,
  } = useGameState(props.gameDifficulty, props.playerName);

  const goToLeaderboard = () => {
    props.onExit("leaderboard");
  };

  const goToDifficultyPicker = () => {
    props.onExit("difficulty");
  };

  return (
    <>
      <h1 className="text-3xl md:text-5xl font-gruppo">Counting Atoms Game</h1>

      <p className="p-5 md:p-10 font-gruppo">
        Pick one or more numbers that sum to the number of React atoms
      </p>
      <div className="mx-auto max-w-[306px] md:max-w-[700px]">
        <p className="font-gruppo">Score: {playerScore}</p>
        {playerIntoLeaderboard === true ? (
          <>
            <p className="font-gruppo">Made it to the leadearboard!!</p>
            <Fireworks
              options={{
                rocketsPoint: {
                  min: 0,
                  max: 100,
                },
              }}
              style={{
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                position: "fixed",
                zIndex: -1,
              }}
            />
          </>
        ) : null}
        <div className="md:flex">
          <div className="h-[280px] p-1 text-center border-solid border-2 border-slate-700 md:w-1/2">
            {gameStatus === "inProgress" ? (
              <AtomsPanel
                quantity={numberOfAtoms}
                difficulty={props.gameDifficulty}
              />
            ) : (
              <PlayAgain
                onPlayAgain={resetGame}
                onChangeDifficulty={goToDifficultyPicker}
                onViewLeaderboard={goToLeaderboard}
                gameWon={gameStatus === "Won" ? true : false}
              />
            )}
          </div>
          <div className="h-[280px] pb-5 text-center border-solid border-2 border-slate-700 md:w-1/2">
            <ButtonsPanel
              available={availableNumbers}
              candidates={candidateNumbers}
              candidatesAreWrong={candidatesAreWrong}
              onNumberClick={onNumberClick}
            />
          </div>
        </div>
        <CountDown
          enabled={gameStatus === "inProgress" ? true : false}
          onTimeOut={setTimeIsOut}
          maxValue={settings.timeAvailable[props.gameDifficulty]}
          timeRequester={availableNumbers}
          onTimeRequest={calculateScore}
        />
      </div>
    </>
  );
};

export default Game;
