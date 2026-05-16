import { useEffect, useState } from "react";
import "./skills.css";

const skills = [
  { name: "Chinese", level: 100, levelName: "Native", color: "#3B82F6"},
  { name: "Swedish", level: 75, levelName: "B2", color: "#93C5FD" },
  { name: "English", level: 75, levelName: "B2", color: "#93C5FD" },
];

export default function Skills() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="skills-container">
      <div className="skills-list">
        {skills.map((skill) => (
          <div key={skill.name} className="skills-item">
            <div className="skills-header">
              <span className="skills-name">{skill.name}</span>
              <span className="skills-level">{skill.levelName}</span>
            </div>

            <div className="skills-bar">
              <div
                className="skills-fill"
                style={{
                  width: loaded ? `${skill.level}%` : "0%",
                  backgroundColor: skill.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}