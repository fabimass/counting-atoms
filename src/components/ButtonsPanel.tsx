import utils from "../utils";
import Button from "./Button";

const ButtonsPanel = () => {
  const buttons = utils.range(1, 9);
  return (
    <div className="h-[280px] pb-5 text-center border-solid border-2 border-slate-700 md:w-1/2">
      {buttons.map((button) => (
        <Button display={button} />
      ))}
    </div>
  );
};

export default ButtonsPanel;
