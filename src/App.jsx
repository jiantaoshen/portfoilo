import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import ProjectDetail from "./pages/projectDetail";
import "./style/theme.css";
import "./style/global.css";

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