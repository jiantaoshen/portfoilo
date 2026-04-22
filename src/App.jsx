import './App.css';
import Circles from './circlesDisplay';
import GitHubIcon from './images/GitHub_Invertocat_Black.png';
import LinkedInIcon from './images/LI-In-Bug.png';

import data from './resume.json';

function App() {
  const { name, languages, skills, about, projects, education } = data;

  return (
    <div className="App">
      <div className="fullname">
        <h1>{name}</h1>
      </div>

      <div className="flex-container">

        {/* Left */}
        <div className="left">
          <h3 className="title">Kontakt</h3>

          <a href={data.contact.github} target="_blank" rel="noopener noreferrer">
            <img src={GitHubIcon} alt="GitHub" className="icons" />
          </a>

          <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer">
            <img src={LinkedInIcon} alt="LinkedIn" className="icons" />
          </a>

          <h3 className="title">Språk</h3>
          <div className="skill">
            {languages.map((lang, i) => (
              <div key={i}>
                <span>{lang.label}</span>
                <Circles level={lang.level} />
              </div>
            ))}
          </div>

          <h3 className="title">Kompetens</h3>
          <div className="skill">
            {skills.map((skill, i) => (
              <div key={i}>
                <span>{skill.label}</span>
                <Circles level={skill.level} />
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="right">

          <div>
            <h3 className="title">Om mig</h3>
            <p>{about}</p>
          </div>

          <div>
            <h3 className="title">Projekt</h3>

            {projects.map((project, i) => (
              <div key={i}>
                <h4>{project.title}</h4>
                <ul>
                  {project.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h3 className="title">Utbildning</h3>

            {education.map((edu, i) => (
              <div key={i}>
                <h4>{edu.title}</h4>
                <ul>
                  {edu.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;