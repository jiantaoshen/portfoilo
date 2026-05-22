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
  {
    id: 2,
    slug: "SmartAssetTrackingSystem",
    title: "Smart Asset Tracking System",
    image: "/projectImages/smart-asset-tracking-system.webp",
    description: "Small console application to track company assets (computers and phones). ",
    tags: ["Backend", "C#", ".NET", "Entity Framework Core", "SQL Local Server"],
    mdFile: "/projects/smart-asset-tracking-system.md",
  },
];