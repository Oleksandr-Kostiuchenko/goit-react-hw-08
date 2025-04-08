import style from "./AuthNav.module.css";

//* Router
import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <nav className={style.navWrapper}>
      <ul className={style.navList}>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNav;
