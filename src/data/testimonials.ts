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
    name: "Alex Johnson",
    role: "CEO",
    company: "TechFlow",
    quote: "Joseph's attention to detail and ability to solve complex problems is unmatched. He delivered our project ahead of schedule.",
  },
  {
    id: "2",
    name: "Sarah Lee",
    role: "Lead Designer",
    company: "Creative Studio",
    quote: "Working with Joseph was a breeze. He translated our Figma designs into a flawless React application with ease.",
  },
];
