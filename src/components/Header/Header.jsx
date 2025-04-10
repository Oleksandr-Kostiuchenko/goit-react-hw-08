//* Libraries
import style from "./Header.module.css";
import { motion } from "framer-motion";
import { MdAccountCircle } from "react-icons/md";
import { useMediaQuery } from "react-responsive";

//* Components
import UserNav from "../UserNav/UserNav";
import AuthNav from "../AuthNav/AuthNav";

//* Redux
import { useSelector } from "react-redux";
import { selectisLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

//* Router
import { NavLink } from "react-router-dom";

const Header = ({ setModalIsOpen }) => {
  const isLoggedIn = useSelector(selectisLoggedIn);
  const userData = useSelector(selectUser);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <motion.div
        className={style.pageHeader}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className={style.iconWrapper}>
          <MdAccountCircle className={style.icon} />
        </div>
        <NavLink to="/" className={style.pageTitle}>
          Home
        </NavLink>

        {isLoggedIn && (
          <div className={style.userDataWrapper}>
            <p>
              Welcome,
              {userData.name.length > 5 && isMobile
                ? ` ${userData.name.slice(0, 5)}...`
                : ` ${userData.name.slice(0, 30)}${
                    userData.name.length >= 30 ? "..." : ""
                  }`}
            </p>
          </div>
        )}
        {isLoggedIn ? <UserNav setModalIsOpen={setModalIsOpen} /> : <AuthNav />}
      </motion.div>
    </>
  );
};

export default Header;
