import { GeneralLayout } from "../../components/layouts/GeneralLayout.tsx";
import GameFrame from "../../islands/GameFrame.tsx";

export default function CullinaryTwo() {
  return (
    <>
      <GeneralLayout
        title="Simply Darren | Cullinary 2"
        name="Cullinary 2"
        description="Cullinary 2 Game"
      >
        <div class="flex justify-center items-center">
          <GameFrame gameSrc="https://simplydarren-test.s3.ap-southeast-1.amazonaws.com/CULLv2_WebGLBuild_Prod/index.html" />
        </div>
      </GeneralLayout>
    </>
  );
}
