interface GameFrameProps {
  gameSrc: string;
}

export default function GameFrame(props: GameFrameProps) {
  const gameSrc: string = props.gameSrc;
  return (
    <>
      <iframe
        src={gameSrc}
        name="CULLinary"
        scrolling="no"
        frameBorder="1"
        title="CULLinary"
        class="w-[1280px] h-[720px]"
        allowFullScreen={true}
      />
    </>
  );
}
