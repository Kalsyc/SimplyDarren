import { useLayoutEffect, useRef } from "preact/hooks";

interface ProjectPostProps {
  markup: string;
}

export default function ProjectPost(props: ProjectPostProps) {
  const el = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (el.current) {
      console.log(props.markup);
      el.current.innerHTML = props.markup;
      el.current.classList.add("markdown-body");
    }
  });

  return (
    <>
      <div
        data-color-mode="dark"
        data-light-theme="light"
        data-dark-theme="dark"
        class="w-[60%]"
        ref={el}
      >
      </div>
    </>
  );
}
