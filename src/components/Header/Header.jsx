//* Libraries
import style from "./Header.module.css";
import { motion } from "framer-motion";
import { MdAccountCircle } from "react-icons/md";

//* Components
import UserNav from "../UserNav/UserNav";
import AuthNav from "../AuthNav/AuthNav";

//* Redux
import { useSelector } from "react-redux";
import { selectisLoggedIn } from "../../redux/auth/selectors";

const Header = ({ setModalIsOpen }) => {
  const isLoggedIn = useSelector(selectisLoggedIn);

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
        <h1 className={style.pageTitle}>Contacts</h1>
        {isLoggedIn ? <UserNav setModalIsOpen={setModalIsOpen} /> : <AuthNav />}
      </motion.div>
    </>
  );
};

export default Header;
