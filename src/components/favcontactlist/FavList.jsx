//* Libraries
import style from "./FavList.module.css";
import toast, { Toaster } from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";

//* Redux
import { useSelector, useDispatch } from "react-redux";
import { selectVisibleFavContacts } from "../../redux/favSlice";

//* Components
import Contact from "../contact/Contact";

const FavList = () => {
  const visibleContacts = useSelector(selectVisibleFavContacts);

  const notifySuccessRemoove = (personName) =>
    toast.success(`${personName} is successfully deleted!`, {
      icon: "❌",
    });

  return (
    <>
      <ul className={style.contactsList}>
        <AnimatePresence mode="popLayout">
          {visibleContacts.map((el) => (
            <motion.li
              className={style.taskWrapper}
              key={el.id}
              layout
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.4 }}
            >
              <Contact
                contactData={el}
                notifySuccessRemoove={notifySuccessRemoove}
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default FavList;
