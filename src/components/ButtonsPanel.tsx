import utils from "../utils";
import Button from "./Button";

interface ButtonsPanelInterface {
  available: number[];
  candidates: number[];
  candidatesAreWrong: boolean;
  onClickHandle: (
    num: number,
    currentStatus: "candidate" | "available" | "used" | "wrong"
  ) => "ok" | null;
}

const ButtonsPanel = (props: ButtonsPanelInterface) => {
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
    <div className="h-[280px] pb-5 text-center border-solid border-2 border-slate-700 md:w-1/2">
      {buttons.map((button) => (
        <Button
          key={button}
          display={button}
          status={buttonStatus(button)}
          onClick={props.onClickHandle}
        />
      ))}
    </div>
  );
};

export default ButtonsPanel;
