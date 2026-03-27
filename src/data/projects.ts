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
    description: "An AI-powered financial trading assistant that analyses market trends and provides intelligent trading insights for the Sierra Leone market. Available as a web app and mobile app.",
    tags: ["JavaScript", "React", "Vite", "TailwindCSS", "Python", "Chart.js", "Recharts", "React Native", "Expo"],
    image: "/projects/leone-ai.png",
    liveUrl: "https://leoneai-trading-assistant.vercel.app/",
    githubUrl: "https://github.com/brotherJoe-7",
    featured: true,
  },
  {
    id: "salone-market",
    title: "Salone Market Hub",
    description: "A high-performance multi-vendor e-commerce platform for the Sierra Leonean market with Admin and Seller dashboards, real-time inventory management, authentication, and WhatsApp integration.",
    tags: ["TypeScript", "Next.js", "React", "Node.js", "Express", "PostgreSQL", "MongoDB", "JWT", "WhatsApp API"],
    image: "/projects/salone-market.png",
    liveUrl: "https://web-khaki-nu-16.vercel.app/",
    githubUrl: "https://github.com/brotherJoe-7",
    featured: true,
  },
  {
    id: "direct-access-syndicate",
    title: "Direct Access Syndicate",
    description: "A professional services platform for IT professionals and businesses with real-time communication, AI assistance (Google Gemini), receipt/PDF generation, QR codes, and SMS notifications via Twilio.",
    tags: ["JavaScript", "React", "Vite", "TailwindCSS", "Socket.io", "Express", "PostgreSQL", "Google Gemini AI", "Twilio", "jsPDF"],
    image: "/projects/direct-access.png",
    liveUrl: "https://direct-access-syndicate.vercel.app/",
    githubUrl: "https://github.com/brotherJoe-7",
    featured: true,
  },
];
