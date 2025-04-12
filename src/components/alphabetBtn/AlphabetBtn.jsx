import style from "./AlphabetBtn.module.css";

//* Redux
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";

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
