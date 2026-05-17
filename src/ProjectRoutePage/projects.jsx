import { useNavigate } from "react-router-dom";
import "./projects.css";
import { projects } from "./projectsData";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div className="projects-page">

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

              {/* TITLE + STATUS */}
              <div className="title-row">

                <h3>{project.title}</h3>

                {/*project.status && (
                  <span className={`status-badge ${project.status}`}>
                    {project.status}
                  </span>
                )*/}

              </div>

              <p className="project-description">
                {project.description}
              </p>

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

    </div>
  );
}