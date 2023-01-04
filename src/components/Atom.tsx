import reactLogo from "../assets/react.svg";

interface IAtom {
  animation: number;
}

const Atom = (props: IAtom) => {
  const getAnimation = () => {
    let temp = "";
    if (props.animation >= 0) {
      temp = "h-12 w-12 animate-spin-slow";
    } else {
      temp = "h-12 w-12";
    }
    switch (props.animation) {
      case 1:
        return [
          "h-12 w-12 mx-[20px] my-[18px] absolute animate-bounce-x-1",
          "absolute animate-bounce-y-1",
          temp,
        ];
      case 2:
        return [
          "h-12 w-12 mx-[20px] my-[18px] absolute animate-bounce-x-2",
          "absolute animate-bounce-y-2",
          temp,
        ];
      case 3:
        return [
          "h-12 w-12 mx-[20px] my-[18px] absolute animate-bounce-x-3",
          "absolute animate-bounce-y-3",
          temp,
        ];
      case 4:
        return [
          "h-12 w-12 mx-[20px] my-[18px] absolute animate-bounce-x-4",
          "absolute animate-bounce-y-4",
          temp,
        ];
      case 5:
        return [
          "h-12 w-12 mx-[20px] my-[18px] absolute animate-bounce-x-5",
          "absolute animate-bounce-y-5",
          temp,
        ];
      case 6:
        return [
          "h-12 w-12 mx-[20px] my-[18px] absolute animate-bounce-x-6",
          "absolute animate-bounce-y-6",
          temp,
        ];
      case 7:
        return [
          "h-12 w-12 mx-[20px] my-[18px] absolute animate-bounce-x-7",
          "absolute animate-bounce-y-7",
          temp,
        ];
      case 8:
        return [
          "h-12 w-12 mx-[20px] my-[18px] absolute animate-bounce-x-8",
          "absolute animate-bounce-y-8",
          temp,
        ];
      case 9:
        return [
          "h-12 w-12 mx-[20px] my-[18px] absolute animate-bounce-x-9",
          "absolute animate-bounce-y-9",
          temp,
        ];
      default:
        return ["h-12 w-12 mx-[20px] my-[18px] inline-block", "", temp];
    }
  };

  const [animation_mov_x, animation_mov_y, animation_spin] = getAnimation();

  return (
    <div className={animation_mov_x}>
      <div className={animation_mov_y}>
        <img src={reactLogo} className={animation_spin} />
      </div>
    </div>
  );
};

export default Atom;
