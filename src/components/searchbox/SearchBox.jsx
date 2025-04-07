//* Libraries
import style from "./SearchBox.module.css";
import { CiSearch } from "react-icons/ci";
import { motion } from "framer-motion";

//* Redux
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterData = useSelector((state) => state.filters.name);

  const onSearchBoxChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <motion.div
      className={style.SearchBoxWrapper}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <CiSearch className={style.searchIcon} />
      <input
        placeholder="Search"
        className={style.contactInput}
        value={filterData}
        onChange={onSearchBoxChange}
        type="text"
      />
    </motion.div>
  );
};

export default SearchBox;
