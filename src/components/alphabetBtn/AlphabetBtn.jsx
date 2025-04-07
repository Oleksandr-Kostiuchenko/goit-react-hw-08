import style from "./AlphabetBtn.module.css";

//* Redux
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { button } from "framer-motion/client";

const AlphabetBtn = ({ children }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeFilter(children));
  };

  return (
    <button className={style.letterBtn} onClick={handleClick}>
      {children}
    </button>
  );
};

export default AlphabetBtn;
