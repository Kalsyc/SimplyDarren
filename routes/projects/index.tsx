import { GeneralLayout } from "../../components/layouts/GeneralLayout.tsx";
import ProjectCard from "../../components/projects/ProjectCard.tsx";
import {
  allProjectCardsInfo,
  ProjectCardInfo,
} from "../../constants/Projects.ts";

export default function Projects() {
  return (
    <>
      <GeneralLayout
        title="Simply Darren | Projects"
        name="Projects"
        description="My Projects @ Simply Darren"
      >
        <div class="flex justify-center items-center gap-4 h-full my-8">
          <div class="grid items-center justify-items-center w-auto gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {allProjectCardsInfo.map((value: ProjectCardInfo) => {
              return <ProjectCard projectCardInfo={value}></ProjectCard>;
            })}
          </div>
        </div>
      </GeneralLayout>
    </>
  );
}
