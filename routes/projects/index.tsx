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
        <div class="flex justify-center items-center gap-4 h-full">
          <div class="grid">
            {allProjectCardsInfo.map((value: ProjectCardInfo) => {
              return <ProjectCard projectCardInfo={value}></ProjectCard>;
            })}
          </div>
        </div>
      </GeneralLayout>
    </>
  );
}
