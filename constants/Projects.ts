export interface ProjectCardInfo {
  imageLink: string;
  tagName: string;
  description: string;
  title: string;
  urlLink: string;
}

export const allProjectCardsInfo: ProjectCardInfo[] = [
  {
    imageLink: "/projects/cards/xpire-img.png",
    tagName: "App Dev",
    description: "Expiry Date Tracker Desktop App",
    title: "Xpire",
    urlLink: "/projects/xpire",
  },
  {
    imageLink: "/projects/cards/petsaver-img.jpeg",
    tagName: "UI/UX Design",
    description: "Personal Savings App for UI/UX Design Project",
    title: "PetSaver",
    urlLink: "/",
  },
  {
    imageLink: "/projects/cards/safespace-img.png",
    tagName: "Virtual Reality",
    description: "VR Mental Health Simulator and Meditation Guide",
    title: "SafeSpace",
    urlLink: "/",
  },
  {
    imageLink: "/projects/cards/digitalkampung-img.png",
    tagName: "Web Dev",
    description: "Rate, Review, Search Hawkers in Singapore",
    title: "Digital Kampung",
    urlLink: "/",
  },
  {
    imageLink: "/projects/cards/kampong-img.png",
    tagName: "Web Dev",
    description: "Social Good Aggregator Platform",
    title: "Project Kampong",
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
