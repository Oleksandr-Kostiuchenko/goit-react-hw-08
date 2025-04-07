//* Libraries
import style from "./FamList.module.css";
import toast, { Toaster } from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";

//* Redux
import { useSelector, useDispatch } from "react-redux";
import { selectFam } from "../../redux/categorySlice";

//* Components
import Contact from "../contact/Contact";

//* Notifier
const notifySuccessRemoove = (personName) =>
  toast.success(`${personName} is successfully deleted!`, {
    icon: "❌",
  });

const FamList = () => {
  const famList = useSelector(selectFam);
  console.log(famList);

  return (
    <>
      <ul className={style.contactsList}>
        <AnimatePresence mode="popLayout">
          {famList.map((el) => (
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

export default FamList;
