export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  problem?: string;
  solution?: string;
  keyFeatures?: string[];
  results?: string;
}

export const projects: Project[] = [
  {
    id: "leone-ai",
    title: "LeoneAI Trading Assistant",
    description: "A full-stack AI-powered financial trading platform for the Sierra Leone market. Combines a Python AI engine for real-time market signal analysis, a FastAPI REST backend, a React web dashboard with live charts, a Google Gemini AI chatbot, and a React Native mobile app.",
    tags: [
      "Python", "FastAPI", "React", "Google Gemini AI",
      "JavaScript", "Vite", "TailwindCSS",
      "Pandas", "PostgreSQL", "React Native",
    ],
    image: "/projects/leone-ai.png",
    liveUrl: "https://leoneai-trading-assistant.vercel.app/",
    githubUrl: "https://github.com/brotherJoe-7",
    featured: true,
    problem: "Traders in Sierra Leone lacked a robust, localized platform that combines real-time financial market signals with accessible, AI-powered analytical tools.",
    solution: "Engineered a comprehensive trading ecosystem utilizing Python for heavy analytical lifting alongside a modern React/Vite dashboard, demystifying complex financial data.",
    keyFeatures: [
      "Real-time Python-driven market signal analysis.",
      "Google Gemini AI automated chatbot for instant trading support.",
      "Cross-platform architecture featuring both Web and React Native applications.",
      "High-throughput PostgreSQL database for dynamic data resolution."
    ],
    results: "Empowered early users with predictive trading intelligence, dramatically reducing the time required for manual chart analysis."
  },
  {
    id: "salone-market",
    title: "Salone Market Hub",
    description: "A multi-vendor e-commerce platform for Sierra Leone with Admin and Seller dashboards, real-time inventory, JWT authentication, WhatsApp order notifications, and an integrated Google Gemini AI chatbot for customer support.",
    tags: [
      "TypeScript", "Next.js", "React", "Node.js",
      "Google Gemini AI", "Express", "PostgreSQL",
      "MongoDB", "JWT", "WhatsApp API",
    ],
    image: "/projects/salone-market.png",
    liveUrl: "https://web-khaki-nu-16.vercel.app/",
    githubUrl: "https://github.com/brotherJoe-7",
    featured: true,
    problem: "Local vendors struggled with fragmented sales channels and high barriers to digital entry, making robust e-commerce largely inaccessible within the local ecosystem.",
    solution: "Constructed a centralized, multi-vendor digital hub utilizing Next.js, streamlining inventory management and enabling instant buyer-seller communications.",
    keyFeatures: [
      "Custom Admin and Seller dashboards for granular inventory and user control.",
      "Direct WhatsApp API integration for localized, instant order notifications.",
      "Google Gemini AI deployed as a 24/7 virtual shopping assistant.",
      "Secure JWT authentication protocols protecting vital vendor and buyer data."
    ],
    results: "Provided a unified, highly scalable digital storefront blueprint specifically tailored to empower West African micro-entrepreneurs."
  },
  {
    id: "direct-access-syndicate",
    title: "Direct Access Syndicate",
    description: "A real-time professional services platform connecting IT experts and businesses. Features a Google Gemini AI assistant, live Socket.io chat, automated PDF and receipt generation, QR codes, and Twilio SMS notifications.",
    tags: [
      "JavaScript", "React", "Vite", "Google Gemini AI",
      "TailwindCSS", "Node.js", "Socket.io",
      "Express", "PostgreSQL", "Twilio",
    ],
    image: "/projects/direct-access.png",
    liveUrl: "https://direct-access-syndicate.vercel.app/",
    githubUrl: "https://github.com/brotherJoe-7",
    featured: true,
    problem: "Identifying a gap in the market where existing professional consultation solutions were either too expensive, lacked local context, or failed to provide necessary real-time communications.",
    solution: "Built Direct Access Syndicate from the ground up. Focused heavily on performance, mobile-first accessibility, and seamless real-time integrations to deliver a world-class booking and consultation experience.",
    keyFeatures: [
      "Real-time data synchronization and live messaging utilizing WebSockets (Socket.io).",
      "Automated dynamic PDF and receipt generation featuring embedded QR codes.",
      "Twilio SMS integrations for instant appointment status and alerts.",
      "Custom authentication flow ensuring bank-grade security for professional data."
    ],
    results: "Successfully launched the MVP, achieving significant performance benchmarks with sub-second load times and high interconnectivity for users."
  },
];
