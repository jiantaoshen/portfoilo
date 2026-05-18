import "./home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  
  return (
    <div className="portfolio-container">

      {/* BACKGROUND IMAGE */}
      <div className="hero-bg" />

      {/* HERO CONTENT */}
      <main className="hero-section">
        <div className="hero-content">
          <h3>Hello, I'm</h3>

          <h1>JIANTAO SHEN</h1>

          <div className="role-container">
            <h2>Backend Developer</h2>
            <div className="blue-line"></div>
          </div>

          <p className="hero-summary">
            I design and build modern, cost-effective backend systems with a focus on clean code, scalable architecture, and high-performance APIs.
          </p>

          <div className="button-group">
            <button className="primary-button" onClick={() => navigate("/projects")}>
              View My Work
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}