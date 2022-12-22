import utils from "../utils";
import Button from "./Button";

const ButtonsPanel = () => {
  const buttons = utils.range(1, 9);
  return (
    <div className="p-1 text-center border-solid border-2 border-indigo-800 md:w-1/2 md:p-4">
      {buttons.map((button) => (
        <Button display={button} />
      ))}
    </div>
  );
};

export default ButtonsPanel;
