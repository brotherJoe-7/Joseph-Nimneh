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
    description: "A full-stack AI-powered financial trading platform for the Sierra Leone market. Features a Python AI engine that analyses real-time market signals, a FastAPI REST backend, a React web dashboard with live charts, and an Expo mobile app.",
    tags: [
      "Python",        // AI engine, signal analysis, data processing
      "FastAPI",       // REST API backend
      "React",         // Web frontend
      "JavaScript",    // Primary frontend language
      "Vite",          // Build tool
      "TailwindCSS",   // Styling
      "Pandas & NumPy",// Data analysis
      "Recharts",      // Data visualisation
      "PostgreSQL",    // Database
      "React Native",  // Mobile app
    ],
    image: "/projects/leone-ai.png",
    liveUrl: "https://leoneai-trading-assistant.vercel.app/",
    githubUrl: "https://github.com/brotherJoe-7",
    featured: true,
  },
  {
    id: "salone-market",
    title: "Salone Market Hub",
    description: "A multi-vendor e-commerce platform built for the Sierra Leonean market. Includes Admin and Seller dashboards, real-time inventory management, secure JWT authentication, and WhatsApp business integration for order notifications.",
    tags: [
      "Next.js",       // Frontend framework & SSR
      "TypeScript",    // Type-safe codebase
      "React",         // UI library
      "Node.js",       // Runtime environment
      "Express",       // Backend API
      "PostgreSQL",    // Primary database
      "MongoDB",       // Secondary data store
      "JWT",           // Authentication
      "TailwindCSS",   // Styling
      "WhatsApp API",  // Business notifications
    ],
    image: "/projects/salone-market.png",
    liveUrl: "https://web-khaki-nu-16.vercel.app/",
    githubUrl: "https://github.com/brotherJoe-7",
    featured: true,
  },
  {
    id: "direct-access-syndicate",
    title: "Direct Access Syndicate",
    description: "A real-time professional services platform connecting IT experts and businesses. Features AI-powered assistance via Google Gemini, live Socket.io communication, automated PDF/receipt generation, QR code integration, and Twilio SMS notifications.",
    tags: [
      "React",             // Frontend framework
      "JavaScript",        // Primary language
      "Vite",              // Build tool
      "TailwindCSS",       // Styling
      "Node.js & Express", // Backend API
      "Socket.io",         // Real-time communication
      "PostgreSQL",        // Database
      "Google Gemini AI",  // AI assistant
      "Twilio",            // SMS notifications
      "jsPDF",             // PDF generation
    ],
    image: "/projects/direct-access.png",
    liveUrl: "https://direct-access-syndicate.vercel.app/",
    githubUrl: "https://github.com/brotherJoe-7",
    featured: true,
  },
];
