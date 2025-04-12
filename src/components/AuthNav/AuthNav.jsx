import style from "./AuthNav.module.css";

//* Router
import { NavLink } from "react-router-dom";

//* CLSX
import clsx from "clsx";
const clasConstructor = ({ isActive }) => {
  return clsx(style.NavLink, { [style.activeLink]: isActive });
};

const AuthNav = () => {
  return (
    <nav className={style.navWrapper}>
      <ul className={style.navList}>
        <li>
          <NavLink className={clasConstructor} to="/register">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink className={clasConstructor} to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNav;
