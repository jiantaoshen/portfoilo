# Personal CV Website (React)

## Description
This is my personal portfolio website built with React. It showcases my projects, skills, and background through a clean and responsive user interface.

## Set up
1. Clone the project
2. Install vite `npm install -D vite @vitejs/plugin-react `
3. Install tailwindcss `npm install tailwindcss @tailwindcss/vite` 
4. Install typescript `npm install -D typescript @types/react @types/react-dom`
5. Install typescript `npm install react-markdown`
6. run `npm run dev`

## Features
- Responsive design
- Client-side routing with React Router
- Clean and simple UI design

## Tech Stack
- React
- React Router
- Vite
- Typescript *
- CSS
- Tailwind CSS

*I converted this project from JavaScript to TypeScript because TypeScript improves code safety by catching errors before runtime and does not affect performance since it compiles to JavaScript. However, it does not improve cybersecurity security.

## Routes
The project structure stores page, style and layout into different folders to improve maintainability and scalability.

| Page Route | jsx |
|---|---|
| `/about` | `about.jsx` |
| `/projects` | `projects.jsx` |
| `/` | `home.jsx` |
| `/projects/:id` | `projectDetail.jsx` |

This structure makes the project easier to maintain and navigate. When updates are needed, it is easier to identify where changes should be made.

`App.jsx` is used as the main routing component, while global stylesheets called `theme.css` and `global.css` manages the overall website theme and styling.

## Future Improvements
- Improve responsive design for more screen sizes
- Improve accessibility
- Add Swedish and Chinese language support

## Q&A

### Q: Why is the text written directly in the code instead of being loaded from a JSON file?

A: Most of the website content is static and rarely changes. Storing the text directly in the code reduces unnecessary data fetching and simplifies the project structure. Since updates are usually made together with webpage changes, this approach provides better simplicity and slightly improved performance compared to loading content from external JSON files.