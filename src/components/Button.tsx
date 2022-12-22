interface ButtonInterface {
  display: number;
}

const Button = (props: ButtonInterface) => {
  return (
    <div className="h-12 w-12 m-5 inline-block">
      <div
        className="button h-12
                bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 rounded-full cursor-pointer select-none
                active:translate-y-2 
                transition-all duration-150 
                [box-shadow:0_8px_0_0_#1b6ff8,0_12px_0_0_#1b70f841]
                active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
                border-[1px] border-blue-400"
      >
        <span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg ">
          {props.display}
        </span>
      </div>
    </div>
  );
};

export default Button;
