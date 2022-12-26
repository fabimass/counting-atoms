import utils from "../utils";
import PlayButton from "./PlayButton";

interface IButtonsPanel {
  available: number[];
  candidates: number[];
  candidatesAreWrong: boolean;
  onNumberClick: (
    num: number,
    currentStatus: "candidate" | "available" | "used" | "wrong"
  ) => "ok" | null;
}

const ButtonsPanel = (props: IButtonsPanel) => {
  const buttons = utils.range(1, 9);

  const buttonStatus = (num: number) => {
    // The number is used if it's not in the availableNumbers array
    if (!props.available.includes(num)) {
      return "used";
    }

    // Candidate numbers
    if (props.candidates.includes(num)) {
      if (props.candidatesAreWrong) return "wrong";
      else return "candidate";
    }

    return "available";
  };

  return (
    <>
      {buttons.map((button) => (
        <PlayButton
          key={button}
          display={button}
          status={buttonStatus(button)}
          onClick={props.onNumberClick}
        />
      ))}
    </>
  );
};

export default ButtonsPanel;
