interface GameFrameProps {
  gameSrc: string;
}

export default function GameFrame(props: GameFrameProps) {
  const gameSrc: string = props.gameSrc;
  return (
    <iframe
      src={gameSrc}
      name="CULLinary"
      scrolling="no"
      frameBorder="1"
      height="760px"
      width="1280px"
      title="CULLinary"
      class="h-[760px] w-[1280px]"
    />
  );
}
