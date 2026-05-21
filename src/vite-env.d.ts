//This tells TypeScript that CSS and CSS modules export an object where every class name is a string.
declare module "*.css";
declare module "*.module.css" {
  const classes: Record<string, string>;
  export default classes;
}

//This tells TypeScript that when we import an SVG file, we get a string (the URL of the SVG) back.
declare module "*.svg" {
  const content: string;
  export default content;
}