import reactLogo from "../assets/react.svg";

interface IAtom {
  animation: number;
}

const Atom = (props: IAtom) => {
  const test = true;

  const getAnimation = () => {
    switch (props.animation) {
      case 1:
        return [
          "h-12 w-12 mx-[20px] my-[18px] absolute animate-bounce-x-1",
          "absolute animate-bounce-y-1",
        ];
      case 2:
        return [
          "h-12 w-12 mx-[20px] my-[18px] absolute animate-bounce-x-2",
          "absolute animate-bounce-y-2",
        ];
      case 3:
        return [
          "h-12 w-12 mx-[20px] my-[18px] absolute animate-bounce-x-3",
          "absolute animate-bounce-y-3",
        ];
      case 4:
        return [
          "h-12 w-12 mx-[20px] my-[18px] absolute animate-bounce-x-4",
          "absolute animate-bounce-y-4",
        ];
      case 5:
        return [
          "h-12 w-12 mx-[20px] my-[18px] absolute animate-bounce-x-5",
          "absolute animate-bounce-y-5",
        ];
      case 6:
        return [
          "h-12 w-12 mx-[20px] my-[18px] absolute animate-bounce-x-6",
          "absolute animate-bounce-y-6",
        ];
      case 7:
        return [
          "h-12 w-12 mx-[20px] my-[18px] absolute animate-bounce-x-7",
          "absolute animate-bounce-y-7",
        ];
      case 8:
        return [
          "h-12 w-12 mx-[20px] my-[18px] absolute animate-bounce-x-8",
          "absolute animate-bounce-y-8",
        ];
      case 9:
        return [
          "h-12 w-12 mx-[20px] my-[18px] absolute animate-bounce-x-9",
          "absolute animate-bounce-y-9",
        ];
      default:
        return ["", ""];
    }
  };

  const [animated_container_1, animated_container_2] = getAnimation();

  return (
    <div
      className={
        test
          ? animated_container_1
          : "h-12 w-12 mx-[20px] my-[18px] inline-block"
      }
    >
      <div className={test ? animated_container_2 : ""}>
        <img src={reactLogo} className="h-12 w-12 animate-spin-slow" />
      </div>
    </div>
  );
};

export default Atom;
