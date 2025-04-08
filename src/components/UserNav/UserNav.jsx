import style from "./UserNav.module.css";
import { IoMdMenu } from "react-icons/io";

const UserNav = ({ setModalIsOpen }) => {
  return (
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
  );
};

export default UserNav;
