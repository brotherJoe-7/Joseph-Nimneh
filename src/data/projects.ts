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
    description: "A full-stack AI-powered financial trading platform for the Sierra Leone market. Combines a Python AI engine for real-time market signal analysis, a FastAPI REST backend, a React web dashboard with live charts, a Google Gemini AI chatbot, and a React Native mobile app.",
    tags: [
      "Python", "FastAPI", "React", "JavaScript",
      "Vite", "TailwindCSS", "Google Gemini AI",
      "Pandas", "PostgreSQL", "React Native",
    ],
    image: "/projects/leone-ai.png",
    liveUrl: "https://leoneai-trading-assistant.vercel.app/",
    githubUrl: "https://github.com/brotherJoe-7",
    featured: true,
  },
  {
    id: "salone-market",
    title: "Salone Market Hub",
    description: "A multi-vendor e-commerce platform for Sierra Leone with Admin and Seller dashboards, real-time inventory, JWT authentication, WhatsApp order notifications, and an integrated Google Gemini AI chatbot for customer support.",
    tags: [
      "TypeScript", "Next.js", "React", "Node.js",
      "Express", "PostgreSQL", "MongoDB",
      "Google Gemini AI", "JWT", "WhatsApp API",
    ],
    image: "/projects/salone-market.png",
    liveUrl: "https://web-khaki-nu-16.vercel.app/",
    githubUrl: "https://github.com/brotherJoe-7",
    featured: true,
  },
  {
    id: "direct-access-syndicate",
    title: "Direct Access Syndicate",
    description: "A real-time professional services platform connecting IT experts and businesses. Features a Google Gemini AI assistant, live Socket.io chat, automated PDF and receipt generation, QR codes, and Twilio SMS notifications.",
    tags: [
      "JavaScript", "React", "Vite", "TailwindCSS",
      "Node.js", "Express", "Socket.io",
      "Google Gemini AI", "PostgreSQL", "Twilio",
    ],
    image: "/projects/direct-access.png",
    liveUrl: "https://direct-access-syndicate.vercel.app/",
    githubUrl: "https://github.com/brotherJoe-7",
    featured: true,
  },
];
