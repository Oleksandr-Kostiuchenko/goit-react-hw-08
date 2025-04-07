import style from "./Alert.module.css";
import { CiCircleInfo } from "react-icons/ci";

const Alert = ({ children }) => {
  return (
    <div className={style.messageWrapper}>
      <CiCircleInfo className={style.infoIcon} />
      <p className={style.alertTitle}>{children}</p>
    </div>
  );
};

export default Alert;
