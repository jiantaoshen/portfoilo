import "./about.css";

export default function About() {
  return (
    <>
      {/* ABOUT */}
      <h1>About Me</h1>

      <p>I studied Robotics at Mälardalen University, where I developed a strong foundation in embedded systems, software development, and artificial intelligence. During my studies, I focused on developing efficient software for resource-constrained and low-memory devices, with an emphasis on performance and optimization.</p> 
      <p> This experience strengthened my interest in building cost-effective and scalable technical solutions. In today's increasingly cost-conscious environment, I am particularly motivated to create efficient systems that balance functionality, reliability, and affordability.</p>

      {/* SKILLS TEXT */}
      <h2>Skills</h2>

      <div className="skills-grid">
        <div>
            <h3>Frontend</h3>
            <ul className="list">
              <li>React</li>
              <li>Vite</li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>HTML</li>
            </ul>
        </div>

        <div>
        <h3>Backend</h3>
        <ul className="list">
          <li>C#</li>
          <li>.NET</li>
          <li>SQL</li>
        </ul>
        </div>

        <div>
          <h3>ML & AI</h3>
          <ul className="list">
            <li>Python</li>
          </ul>
        </div>

        <div>
          <h3>Others</h3>
          <ul className="list">
            <li>Git / GitHub</li>
          </ul>
        </div>
</div>
      {/* LANGUAGES */}
      <h2>Languages</h2>

      <ul className="list">
        <li>Chinese: Native</li>
        <li>Swedish: CEFR B2</li>
        <li>English: CEFR B2</li>
      </ul>

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