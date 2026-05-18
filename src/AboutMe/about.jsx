import "./about.css";
import Skills from "./skills";

export default function About() {
  return (
    <>
      {/* ABOUT */}
      <h1>About Me</h1>

      <p>I studied Robotics at Mälardalen University, where I developed a strong foundation in embedded systems, software development, and artificial intelligence. During my studies, I focused on developing efficient software for resource-constrained and low-memory devices, with an emphasis on performance and optimization.</p> 
      <p> This experience strengthened my interest in building cost-effective and scalable technical solutions. In today's increasingly cost-conscious environment, I am particularly motivated to create efficient systems that balance functionality, reliability, and affordability.</p>

      {/* SKILLS TEXT */}
      <h2>Skills</h2>

      <h3 className="subtitle">Core Technologies</h3>
      <ul className="list">
        <li>JavaScript</li>
        <li>Python</li>
        <li>C#</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>

      <h3 className="subtitle">Frameworks & Tools</h3>
      <ul className="list">
        <li>React</li>
        <li>Git / GitHub</li>
      </ul>

      {/* LANGUAGES */}
      <h2>Languages</h2>

      <Skills />

      {/* EDUCATION */}
      <h2>Education</h2>

      <h3 className="subtitle">AI Programmer (vocational training), Lexicon AB (Mar 2026 - Present)</h3>
      <p>Focus on development of web applications and cloud services.</p>

      <h3 className="subtitle">Labor market activities + language courses (Jul 2024 - Mar 2026)</h3>
      <p>Participated in various activities to improve employability and language skills.</p>

      <h3 className="subtitle">Master of Science in Engineering (Robotics), Mälardalen University (Sep 2019 - Jul 2024)</h3>
      <p>Focus on robotics, embedded systems, machine learning, and artificial intelligence.</p>
    </>
  );
}