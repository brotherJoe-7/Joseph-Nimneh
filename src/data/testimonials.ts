export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sheku Dinneh Kamara",
    role: "Faculty Year Leader",
    company: "University",
    quote: "Joseph consistently goes beyond what is expected. He approaches complex IT and security problems with genuine curiosity and always finds practical, real-world applications for what he learns.",
  },
  {
    id: "2",
    name: "Dennis Harding",
    role: "Fellow IT Student",
    company: "Project Collaborator",
    quote: "Working alongside Joseph on group projects was inspiring. He takes ownership of the hardest technical challenges and always delivers robust code that actually works in production.",
  },
  {
    id: "3",
    name: "Alhassan Ojoe Kamara",
    role: "Software Developer",
    company: "Tech Community",
    quote: "Joseph built the entire AI integration layer for his platform from scratch. His ability to blend Python, React, and external APIs shows a level of maturity well beyond his years.",
  },
];
