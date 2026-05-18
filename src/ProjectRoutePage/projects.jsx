import { useNavigate } from "react-router-dom";
import "./projects.css";
import { projects } from "./projectsData";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Projects</h1>

      <div className="projects-grid">

        {/* PROJECT CARDS WITH NAVIGATION */}
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() =>
              navigate(`/projects/${project.slug}`)
            }
          >

            {/* IMAGE */}
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            {/* CONTENT */}
            <div className="project-content">

              {/* TITLE */}
              <h3 className="title-row">{project.title}</h3>

              <p>{project.description}</p>

              {/* TAGS */}
              <div className="tag-group">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              
            </div>

          </div>
        ))}
      </div>
    </>
  );
}