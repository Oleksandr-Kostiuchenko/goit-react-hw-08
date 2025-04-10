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

//* Redux
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";

const Navigation = ({ setModalIsOpen }) => {
  const dispatch = useDispatch();

  const handleNavClick = () => {
    setModalIsOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    setModalIsOpen(false);
  };

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
              <NavLink to="/contacts" onClick={handleNavClick}>
                <FaHome />
                Contacts
              </NavLink>
            </li>
            <li className={style.navItem}>
              <NavLink to="/add" onClick={handleNavClick}>
                <IoPersonAdd />
                Add contacts
              </NavLink>
            </li>
            <li className={style.navItem}>
              <NavLink to="/fav" onClick={handleNavClick}>
                <FaHeart />
                Favorites
              </NavLink>
            </li>
            <li className={style.navItem}>
              <NavLink to="/groups" onClick={handleNavClick}>
                <HiUserGroup />
                Groups
              </NavLink>
            </li>
            <li className={style.logoutBtnEl}>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
