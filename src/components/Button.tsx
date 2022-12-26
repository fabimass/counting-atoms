interface IPlayButton {
  display: number;
  status: "candidate" | "available" | "used" | "wrong";
  onClick: (
    num: number,
    currentStatus: "candidate" | "available" | "used" | "wrong"
  ) => "ok" | null;
}

const Button = (props: IPlayButton) => {
  const buttonState = (state: IPlayButton["status"]) => {
    switch (state) {
      case "wrong":
        return `button h-12
            bg-red-500 rounded-full cursor-pointer select-none
            translate-y-2 
            [box-shadow:0_0_4px_4px_#ff2226]
            border-[1px] border-red-400`;
      case "used":
        return `button h-12
            bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full cursor-pointer select-none
            translate-y-2 
            [box-shadow:0_0_4px_4px_#79fe0c]
            border-[1px] border-green-400`;
      case "candidate":
        return `button h-12
            bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 rounded-full cursor-pointer select-none
            translate-y-2 
            [box-shadow:0_0_4px_4px_#1bf1f8]
            border-[1px] border-blue-400`;
      default:
        return `button h-12
            bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 rounded-full cursor-pointer select-none
            active:translate-y-2 
            transition-all duration-150 
            [box-shadow:0_8px_0_0_#1b6ff8,0_12px_0_0_#1b70f841]
            active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
            border-[1px] border-blue-400`;
    }
  };
  return (
    <div className="h-12 w-12 m-5 inline-block">
      <div
        className={buttonState(props.status)}
        onClick={() => props.onClick(props.display, props.status)}
      >
        <span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg ">
          {props.display}
        </span>
      </div>
    </div>
  );
};

export default Button;
