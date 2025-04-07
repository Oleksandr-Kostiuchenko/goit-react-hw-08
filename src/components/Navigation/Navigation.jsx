//* Libraries
import style from "./Navigation.module.css";
import { FaHome } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";

//* Router
import { NavLink } from "react-router-dom";

const Navigation = ({ setModalIsOpen }) => {
  return (
    <div className={style.menuBackdrop}>
      <div className={`${style.container} ${style.mobileMenuContainer}`}>
        <button
          onClick={() => {
            setModalIsOpen(false);
          }}
          className={style.mobileMenuCloseBtn}
        >
          <IoMdClose />
        </button>

        <nav className={style.navWrapper}>
          <ul className={style.navList}>
            <li className={style.navItem}>
              <NavLink to="/">
                <FaHome />
                Home
              </NavLink>
            </li>
            <li className={style.navItem}>
              <NavLink to="/add">
                <IoPersonAdd />
                Add contacts
              </NavLink>
            </li>
            <li className={style.navItem}>
              <NavLink to="/fav">
                <FaHeart />
                Favorites
              </NavLink>
            </li>
            <li className={style.navItem}>
              <NavLink to="/groups">
                <HiUserGroup />
                Groups
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
