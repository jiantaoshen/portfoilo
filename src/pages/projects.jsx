import { useNavigate } from "react-router-dom";
import grid from "../styles/components/grid.module.css";
import card from "../styles/components/card.module.css";
import { projects } from "../projectMetaData/projectsData";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Projects</h1>

      <div className={grid["projects-grid"]}>

        {/* PROJECT CARDS WITH NAVIGATION */}
        {projects.map((project) => (
          <div
            key={project.id}
            className={card["project-card"]}
            onClick={() =>
              navigate(`/projects/${project.slug}`)
            }
          >

            {/* IMAGE */}
            <div className={card["project-image"]}>
              <img src={project.image} alt={project.title} />
            </div>

            {/* CONTENT */}
            <div className={card["project-content"]}>

              {/* TITLE */}
              <h3 className={card["title-row"]}>{project.title}</h3>

              <p>{project.description}</p>

              {/* TAGS */}
              <div className={card["tag-group"]}>
                {project.tags.map((tag) => (
                  <span key={tag} className={card["tag"]}>
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