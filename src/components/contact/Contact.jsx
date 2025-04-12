//* Libraries
import style from "./Contact.module.css";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

//* Redux
import { useDispatch, useSelector } from "react-redux";
import { selectError } from "../../redux/contacts/selectors";
import { selectFavContacts } from "../../redux/favcontacts/selectors";
import { deleteContact } from "../../redux/contacts/operations";
import { addFav, deleteFav } from "../../redux/favcontacts/slice";
import { removeFromAllCategories } from "../../redux/category/slice";
import { setSelectedContact } from "../../redux/contacts/slice";

//* Router
import { NavLink } from "react-router-dom";

const Contact = ({ contactData, setDeleteModalIsOpen }) => {
  const dispatch = useDispatch();
  const favInfo = useSelector(selectFavContacts);
  const isFav = favInfo.some((fav) => fav && fav.id === contactData.id);

  const handleDeleteClick = () => {
    dispatch(setSelectedContact(contactData));
    setDeleteModalIsOpen(true);
  };

  const handleToggleFav = () => {
    const isFavorite = favInfo.some((fav) => fav.id === contactData.id);

    if (isFavorite) {
      dispatch(deleteFav(contactData));
    } else {
      dispatch(addFav(contactData));
    }
  };

  const name = contactData.name.split(" ");
  const firstName = name[0];
  const secondName = name[1];

  return (
    <>
      <motion.div
        className={style.contactWrapper}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.4 }}
      >
        <div className={style.personInfoWrapper}>
          <div
            className={style.personAvatar}
            style={{ backgroundColor: "#A3C4BC" }}
          >
            {firstName[0]}
            {secondName !== undefined && secondName[0]}
          </div>
          <div className={style.nameWrapper}>
            <NavLink to={`/${contactData.id}`} className={style.personName}>
              {contactData.name}
            </NavLink>
            <a
              className={style.personNumber}
              href={`tel:${contactData.number}`}
            >
              {contactData.number}
            </a>
          </div>
        </div>

        <div className={style.btnsWrapper}>
          <button className={style.deleteBtn} onClick={handleDeleteClick}>
            Delete
          </button>
          <button className={style.favBtn} onClick={handleToggleFav}>
            {isFav ? (
              <FaHeart className={style.likeIcon} />
            ) : (
              <FaRegHeart className={style.likeIcon} />
            )}
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
