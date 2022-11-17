import { useLayoutEffect, useRef } from "preact/hooks";

interface ProjectPostProps {
  markup: string;
}

export default function ProjectPost(props: ProjectPostProps) {
  const el = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (el.current) {
      el.current.innerHTML = props.markup;
    }
  });

  return (
    <>
      <div
        data-color-mode="dark"
        data-light-theme="light"
        data-dark-theme="dark"
        class="w-[60%] markdown-body"
        ref={el}
      >
      </div>
    </>
  );
}
