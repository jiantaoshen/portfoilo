import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./LandingPage/home";
import About from "./AboutMe/about";
import Projects from "./ProjectRoutePage/projects";
import ProjectDetail from "./ContentPage/projectDetail";
import "./theme.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}