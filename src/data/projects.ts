export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "leone-ai",
    title: "LeoneAI Trading Assistant",
    description: "An AI-powered financial trading assistant that leverages machine learning models to analyse market trends and provide intelligent trading insights for the Sierra Leone market.",
    tags: ["TypeScript", "OpenAI", "React", "Python", "AI"],
    image: "/projects/leone-ai.png",
    liveUrl: "https://leoneai-trading-assistant.vercel.app/",
    githubUrl: "https://github.com/brotherJoe-7",
    featured: true,
  },
  {
    id: "salone-market",
    title: "Salone Market Hub",
    description: "A high-performance multi-vendor e-commerce platform built for the Sierra Leonean market, featuring real-time inventory management and secure payment integration.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "TailwindCSS"],
    image: "/projects/salone-market.png",
    liveUrl: "https://web-khaki-nu-16.vercel.app/",
    githubUrl: "https://github.com/brotherJoe-7",
    featured: true,
  },
  {
    id: "direct-access-syndicate",
    title: "Direct Access Syndicate",
    description: "A professional services and networking platform designed to connect skilled IT professionals and businesses, streamlining direct engagement and project coordination.",
    tags: ["React", "Next.js", "TailwindCSS", "TypeScript"],
    image: "/projects/leone-ai.png",
    liveUrl: "https://direct-access-syndicate.vercel.app/",
    githubUrl: "https://github.com/brotherJoe-7",
    featured: true,
  },
];
