import MainHeaderContent from "../../islands/MainHeaderContent.tsx";

export default function MainHeaderWrapper() {
  return (
    <>
      <header class="h-[48px] flex justify-center items-center">
        <div class="flex h-full sm:justify-center items-center gap-3 overflow-auto px-4">
          <MainHeaderContent />
          <a class="hover:opacity-50" href="/">Home</a>
          <a class="hover:opacity-50" href="/projects">Projects</a>
          <a class="hover:opacity-50" href="/cullinary">Cullinary</a>
        </div>
      </header>
    </>
  );
}
