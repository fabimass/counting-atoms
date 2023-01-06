interface IDifficultSelector {
  onSelect: React.Dispatch<
    React.SetStateAction<"easy" | "normal" | "hard" | "unknown">
  >;
}
const DifficultySelector = (props: IDifficultSelector) => {
  return (
    <>
      <p className="p-5 md:p-10">Pick your difficulty</p>
      <div
        className="button h-12
        bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-200 hover:via-green-300 hover:to-green-400 rounded-full cursor-pointer select-none
        active:translate-y-2 
        transition-all duration-150 
        [box-shadow:0_8px_0_0_#1bf822,0_12px_0_0_#40f81b41]
        active:[box-shadow:0_0px_0_0_#1bf822,0_0px_0_0_#40f81b41]
        border-[1px] border-green-400"
        onClick={() => props.onSelect("easy")}
      >
        <span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg ">
          Piece of cake
        </span>
      </div>
      <div
        className="button h-12 my-10
        bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-200 hover:via-yellow-300 hover:to-yellow-400 rounded-full cursor-pointer select-none
        active:translate-y-2 
        transition-all duration-150 
        [box-shadow:0_8px_0_0_#f4f81b,0_12px_0_0_#f8f41b41]
        active:[box-shadow:0_0px_0_0_#f4f81b,0_0px_0_0_#f8f41b41]
        border-[1px] border-yellow-400"
        onClick={() => props.onSelect("normal")}
      >
        <span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg ">
          Fair
        </span>
      </div>
      <div
        className="button h-12
        bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:from-red-200 hover:via-red-300 hover:to-red-400 rounded-full cursor-pointer select-none
        active:translate-y-2 
        transition-all duration-150 
        [box-shadow:0_8px_0_0_#f81b1b,0_12px_0_0_#f81f1b41]
        active:[box-shadow:0_0px_0_0_#f81b1b,0_0px_0_0_#f81f1b41]
        border-[1px] border-red-400"
        onClick={() => props.onSelect("hard")}
      >
        <span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg ">
          Madness
        </span>
      </div>
    </>
  );
};

export default DifficultySelector;
