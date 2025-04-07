//* Libraries
import style from "./ContactList.module.css";
import toast, { Toaster } from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";

//* Components
import Contact from "../contact/Contact";

//* Redux
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

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
              <Contact contactData={el} />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default ContactList;
