import { GeneralLayout } from "../../components/layouts/GeneralLayout.tsx";

export default function Cullinary() {
  return (
    <>
      <GeneralLayout
        title="Simply Darren | Cullinary"
        name="Cullinary"
        description="Cullinary Game"
      >
        <div class="flex justify-center items-center gap-4 m-4">
          <a href="/cullinary/cull-1">Cullinary 1</a>
          <a href="/cullinary/cull-2">Cullinary 2</a>
        </div>
      </GeneralLayout>
    </>
  );
}
