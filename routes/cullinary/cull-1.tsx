import { GeneralLayout } from "../../components/layouts/GeneralLayout.tsx";
import GameFrame from "../../islands/GameFrame.tsx";

export default function CullinaryOne() {
  return (
    <>
      <GeneralLayout
        title="Simply Darren | Cullinary 1"
        name="Cullinary 1"
        description="Cullinary 1 Game"
      >
        <div class="min-h-[calc(100vh-48px)]">
          <GameFrame gameSrc="https://simplydarren-test.s3.ap-southeast-1.amazonaws.com/CULLinary_WebGL_Build_Prod/index.html" />
        </div>
      </GeneralLayout>
    </>
  );
}
