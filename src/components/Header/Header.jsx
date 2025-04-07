//* Libraries
import style from "./Header.module.css";
import { motion } from "framer-motion";
import { MdAccountCircle } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { BiSolidPencil } from "react-icons/bi";
import { IoMdMenu } from "react-icons/io";

const Header = ({ setModalIsOpen }) => {
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
        <div className={`${style.iconWrapper} ${style.iconWrapperMenu}`}>
          <button
            onClick={() => {
              setModalIsOpen(true);
            }}
            className={style.menuBtn}
          >
            <IoMdMenu className={style.icon} />
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
