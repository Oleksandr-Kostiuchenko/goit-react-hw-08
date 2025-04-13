//* Libraries
import style from "./Navigation.module.css";
import toast from "react-hot-toast";
import { FaHome } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";

//* CLSX
import clsx from "clsx";
const clasConstructor = ({ isActive }) => {
  return clsx(style.NavLink, { [style.activeLink]: isActive });
};
//* Router
import { NavLink } from "react-router-dom";

//* Redux
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";

//* Notifier
const notifySuccess = () =>
  toast.success(`You have successfully logged out. See you soon!`);
const notifyFailure = () =>
  toast.success(`Sorry! Something went wrong...`, {
    icon: "❌",
  });

const Navigation = ({ setModalIsOpen }) => {
  const dispatch = useDispatch();

  const handleNavClick = () => {
    setModalIsOpen(false);
  };

  const handleLogout = () => {
    try {
      dispatch(logout())
        .unwrap()
        .then(() => {
          notifySuccess();
        });
    } catch (error) {
      notifyFailure();
    }

    setModalIsOpen(false);
  };

  return (
    <div className={`${style.menuBackdrop} menuBackdrop`}>
      <div className={`${style.container} ${style.mobileMenuContainer}`}>
        <button
          onClick={() => {
            setModalIsOpen(false);
          }}
          className={`${style.mobileMenuCloseBtn} icon`}
        >
          <IoMdClose className={style.closeIcon} />
        </button>

        <nav className={style.navWrapper}>
          <ul className={style.navList}>
            <li className={style.navItem}>
              <NavLink
                className={clasConstructor}
                to="/contacts"
                onClick={handleNavClick}
              >
                <FaHome className={style.navIcon} />
                Contacts
              </NavLink>
            </li>
            <li className={style.navItem}>
              <NavLink
                className={clasConstructor}
                to="/add"
                onClick={handleNavClick}
              >
                <IoPersonAdd className={style.navIcon} />
                Add contacts
              </NavLink>
            </li>
            <li className={style.navItem}>
              <NavLink
                className={clasConstructor}
                to="/fav"
                onClick={handleNavClick}
              >
                <FaHeart className={style.navIcon} />
                Favorites
              </NavLink>
            </li>
            <li className={style.navItem}>
              <NavLink
                className={clasConstructor}
                to="/groups"
                onClick={handleNavClick}
              >
                <HiUserGroup className={style.navIcon} />
                Groups
              </NavLink>
            </li>
            <li className={style.logoutBtnEl}>
              <button className={style.logoutBtn} onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
