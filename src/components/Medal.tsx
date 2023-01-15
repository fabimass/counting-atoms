interface IMedal {
  place: number;
}

const Medal = (props: IMedal) => {
  return (
    <>
      {props.place === 1 ? (
        <img
          src={"./1st-place-medal.png"}
          className="mx-auto h-[36px] w-[36px] md:h-[48px] md:w-[48px]"
        />
      ) : props.place === 2 ? (
        <img
          src={"./2nd-place-medal.png"}
          className="mx-auto h-[36px] w-[36px] md:h-[48px] md:w-[48px]"
        />
      ) : props.place === 3 ? (
        <img
          src={"./3rd-place-medal.png"}
          className="mx-auto h-[36px] w-[36px] md:h-[48px] md:w-[48px]"
        />
      ) : (
        props.place
      )}
    </>
  );
};

export default Medal;
