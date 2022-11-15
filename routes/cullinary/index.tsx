import { GeneralLayout } from "../../components/layouts/GeneralLayout.tsx";

export default function Cullinary() {
  return (
    <>
      <GeneralLayout
        title="Simply Darren | Cullinary"
        name="Cullinary"
        description="Cullinary Game"
      >
        <div class="flex flex-col justify-center items-center gap-4 h-full">
          Click here to play CULLinary
          <div class="flex justify-center items-center gap-4">
            <a href="/cullinary/cull-1" class="hover:opacity-50">Cullinary 1</a>
            <a href="/cullinary/cull-2" class="hover:opacity-50">Cullinary 2</a>
          </div>
        </div>
      </GeneralLayout>
    </>
  );
}
