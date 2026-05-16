import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <nav className="navbar">
      <NavLink className="logo" to="/">
        JIANTAO
      </NavLink>

      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          About
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>isActive ? "nav-link active" : "nav-link"}
        >
          Projects
        </NavLink>
      </div>
    </nav>
  );
}