//* Libraries
import style from "./HomePage.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { RiContactsBook2Fill } from "react-icons/ri";

//* React
import { useState } from "react";

const HomePage = () => {
  const [aboutIsOpen, setAboutIsOpen] = useState(false);

  const toggleAbout = () => {
    setAboutIsOpen(!aboutIsOpen);
  };

  return (
    <div className={style.homeWrapper}>
      <RiContactsBook2Fill className={style.contactBookIcon} />
      <h1>Welcome to Contact Book App!</h1>
      <p className={style.description}>
        To start using it, you should create an account or login.
      </p>
      <button className={style.exploreBtn} onClick={toggleAbout}>
        explore
      </button>

      <AnimatePresence mode="popLayout">
        {aboutIsOpen && (
          <motion.div
            className={style.aboutSection}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <h2>About the App</h2>
            <p>
              Contact Book App is a simple and intuitive tool to manage your
              personal and professional contacts. You can add, edit, and
              organize your contacts with ease.
            </p>
            <h2>About the Developer</h2>
            <p>
              This app was developed by Alex, a passionate web developer
              specializing in creating user-friendly and efficient applications.
              Feel free to reach out for feedback or collaboration!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomePage;
