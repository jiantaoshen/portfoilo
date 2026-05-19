import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { projects } from "../projectMetaData/projectsData";
import ReactMarkdown from "react-markdown";
import "./projectDetail.css";

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [content, setContent] = useState("");

  const project = projects.find(
    (p) => p.slug === slug
  );

  useEffect(() => {
    if (!project) return;

    fetch(project.mdFile)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, [project]);

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div className="project-detail">

      {/* BACK BUTTON */}
      <button
        className="back-button"
        onClick={() => navigate("/projects")}
      >
        ← Back to Projects
      </button>

      <h1>{project.title}</h1>

      <div className="markdown">
        <ReactMarkdown>
          {content}
        </ReactMarkdown>
      </div>

    </div>
  );
}