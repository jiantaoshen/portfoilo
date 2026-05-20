import { NavLink } from "react-router-dom";
import style from '../styles/components/button.module.css';

export default function Header() {
  return (
    <nav className="relative z-10 flex justify-between items-center px-[var(--space-3)] py-[var(--space-2)]">
      <NavLink className={style.logo} to="/">
        JIANTAO
      </NavLink>

      <div className={style.navLinks}>
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? style.active : style.navLink}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? style.active : style.navLink}
        >
          About
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>isActive ? style.active : style.navLink}
        >
          Projects
        </NavLink>
      </div>
    </nav>
  );
}