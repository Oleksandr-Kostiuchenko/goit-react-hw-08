//* Libraries
import style from "./FriendList.module.css";
import toast, { Toaster } from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";

//* Redux
import { useSelector } from "react-redux";
import { selectFriends } from "../../redux/category/selectors";

//* Components
import Contact from "../contact/Contact";

//* Notifier
const notifySuccessRemoove = (personName) =>
  toast.success(`${personName} is successfully deleted!`, {
    icon: "❌",
  });

const FriendList = () => {
  const friendList = useSelector(selectFriends);

  return (
    <>
      <ul className={style.contactsList}>
        <AnimatePresence mode="popLayout">
          {friendList.map((el) => (
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
    </>
  );
};

export default FriendList;
