import { ProjectCardInfo } from "../../constants/Projects.ts";

export type ProjectCardProps = {
  projectCardInfo: ProjectCardInfo;
};

export default function ProjectCard({ projectCardInfo }: ProjectCardProps) {
  return (
    <>
      <a
        href={projectCardInfo.urlLink}
        class="sm:w-[400px] sm:h-[225px] w-[80vw] h-[45vw] rounded-xl group"
      >
        <div class="w-full h-full relative rounded-xl">
          <img
            class="w-full h-full object-cover rounded-xl"
            alt={projectCardInfo.title}
            src={projectCardInfo.imageLink}
          />
          <div class="block md:hidden md:group-hover:block absolute top-1 left-1 rounded-2xl dark:bg-secondaryDark bg-secondaryLight px-2 py-1 font-bold">
            {projectCardInfo.tagName}
          </div>
          <div class="flex md:hidden md:group-hover:flex absolute bottom-0 w-full h-[50%] flex-col bg-black bg-opacity-60 rounded-xl text-[#d9d9d9] dark:bg-primaryDark dark:bg-opacity-60 dark:text-fontDark justify-center items-center overflow-hidden overflow-ellipsis whitespace-nowrap">
            <div class="font-bold">
              {projectCardInfo.title}
            </div>
            <div>
              {projectCardInfo.description}
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
