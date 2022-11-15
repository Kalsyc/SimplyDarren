import { ProjectCardInfo } from "../../constants/Projects.ts";

export type ProjectCardProps = {
  projectCardInfo: ProjectCardInfo;
};

export default function ProjectCard({ projectCardInfo }: ProjectCardProps) {
  return (
    <>
      <div>
        {projectCardInfo.title}
      </div>
    </>
  );
}
