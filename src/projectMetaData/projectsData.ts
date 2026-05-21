export type Project = {
  id: number;
  slug: string;
  title: string;
  image: string;
  description: string;
  tags: string[];
  mdFile: string;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "portfolio-website",
    title: "Portfolio Website",
    image: "/projectImages/portfolio.webp",
    description: "Personal portfolio built with React.",
    tags: ["Frontend", "React", "Vite", "TypeScript", "Tailwind CSS","CSS Modules","Vercel"],
    mdFile: "/projects/portfolio-website.md",
  },
];