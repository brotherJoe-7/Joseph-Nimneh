export interface Skill {
  category: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: "Specializations",
    items: ["Cybersecurity", "Artificial Intelligence", "IT Consulting", "Quality Assurance"],
  },
  {
    category: "Languages",
    items: ["Python", "JavaScript", "TypeScript"],
  },
  {
    category: "Frameworks & Web",
    items: ["Next.js", "React", "Node.js", "Express", "TailwindCSS"],
  },
  {
    category: "IT & Engineering",
    items: ["Software Engineering", "Software Development", "System Analysis", "IT Support"],
  },
  {
    category: "Tools & Infrastructure",
    items: ["Git", "GitHub", "Docker", "Vercel", "PostgreSQL", "VS Code"],
  },
];
