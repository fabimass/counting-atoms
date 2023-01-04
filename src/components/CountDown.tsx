import { useState, useEffect } from "react";
import settings from "../settings";

interface ICountDown {
  enabled: boolean;
  difficulty: "easy" | "normal" | "hard";
  onTimeOut: React.Dispatch<React.SetStateAction<boolean>>;
}

const CountDown = (props: ICountDown) => {
  const [secondsLeft, setSecondsLeft] = useState<number>(
    settings.timeAvailable[props.difficulty]
  );
  const [clockEnabled, setClockEnabled] = useState(true);

  // Countdown timer
  useEffect(() => {
    if (clockEnabled) {
      if (secondsLeft > 0) {
        const intervalId = setInterval(
          () => setSecondsLeft((prevCount) => prevCount - 1),
          1000
        );
        return () => clearInterval(intervalId);
      }
      if (secondsLeft === 0) {
        props.onTimeOut(true);
      }
    }
  }, [secondsLeft, clockEnabled]);

  // Resets the timer
  useEffect(() => {
    if (props.enabled) {
      setSecondsLeft(settings.timeAvailable[props.difficulty]);
      setClockEnabled(true);
    } else {
      setClockEnabled(false);
    }
  }, [props.enabled]);

  return (
    <div className="relative mx-auto mt-5 md:mt-10 w-16 h-16 md:w-28 md:h-28">
      <div
        className={
          secondsLeft > 0 && props.enabled
            ? "rounded-full animate-spin bg-gradient-to-tr from-[#242424] to-slate-700 w-16 h-16 md:w-28 md:h-28"
            : "rounded-full bg-gradient-to-tr from-[#242424] to-slate-700 w-16 h-16 md:w-28 md:h-28"
        }
      ></div>
      <div className="absolute top-[12.5%] left-[12.5%] md:top-[7.25%] md:left-[7.25%] h-12 w-12 md:h-24 md:w-24 rounded-full bg-[#242424]">
        <span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg md:text-3xl">
          {secondsLeft}
        </span>
      </div>
    </div>
  );
};

export default CountDown;
