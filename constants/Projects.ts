export interface ProjectCardInfo {
  imageLink: string;
  tagName: string;
  description: string;
  title: string;
  urlLink: string;
}

export const allProjectCardsInfo: ProjectCardInfo[] = [
  {
    imageLink: "/projects/cards/petsaver-img.jpeg",
    tagName: "UI/UX Design",
    description: "Personal Savings App for UI/UX Design Project",
    title: "PetSaver",
    urlLink: "/",
  },
  {
    imageLink: "/projects/cards/cullinary-gif.gif",
    tagName: "Game Dev",
    description: "Dungeon Crawler and Restaurant Simulator",
    title: "CULLinary",
    urlLink: "/cullinary/cull-1",
  },
  {
    imageLink: "/projects/cards/cullinary2-gif.gif",
    tagName: "Game Dev",
    description: "Dungeon Crawler and Delivery Simulator",
    title: "CULLinary2",
    urlLink: "/cullinary/cull-2",
  },
];
