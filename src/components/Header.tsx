import { NavLink } from "react-router-dom";
import textbutton from '../styles/components/event.module.css';

export default function Header() {
  return (
    <nav className="relative z-10 flex justify-between items-center px-[var(--space-3)] py-[var(--space-2)]">
      <NavLink className={textbutton.logo} to="/">
        JIANTAO
      </NavLink>

      <div className={textbutton.navLinks}>
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? textbutton.active : textbutton.navLink}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? textbutton.active : textbutton.navLink}
        >
          About
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>isActive ? textbutton.active : textbutton.navLink}
        >
          Projects
        </NavLink>
      </div>
    </nav>
  );
}