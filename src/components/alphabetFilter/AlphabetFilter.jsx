//* Components
import style from "./AlphabetFilter.module.css";
import AlphabetBtn from "../alphabetBtn/AlphabetBtn";

//* Libraries
import { IoCloseCircleSharp } from "react-icons/io5";

//* Redux
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const AlphabetFilter = () => {
  const dispatch = useDispatch();
  const handleResetClick = () => {
    dispatch(changeFilter(""));
  };

  return (
    <ul className={style.alpabetList}>
      {alphabet.map((letter) => (
        <li className={style.alpabetItem} key={letter}>
          <AlphabetBtn>{letter}</AlphabetBtn>
        </li>
      ))}
      <li>
        <button className={style.letterBtn} onClick={handleResetClick}>
          <IoCloseCircleSharp className={style.resetIcon} />
        </button>
      </li>
    </ul>
  );
};

export default AlphabetFilter;
