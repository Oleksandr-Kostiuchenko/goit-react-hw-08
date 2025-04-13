//* Libraries
import style from "./HomePage.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { FcContacts } from "react-icons/fc";
import { MdRocketLaunch } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import { FaDev } from "react-icons/fa";
import { useSpring, animated } from "react-spring";
import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher";

//* React
import { useState } from "react";

//* React Spring
const calc = (x, y) => {
  const BUFFER = 5;
  return [
    -(y - window.innerHeight / 2) / BUFFER,
    (x - window.innerWidth / 2) / BUFFER,
    1.2,
  ];
};
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const HomePage = () => {
  const [aboutIsOpen, setAboutIsOpen] = useState(false);

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const toggleAbout = () => {
    setAboutIsOpen(!aboutIsOpen);
  };

  return (
    <div className={style.homeWrapper}>
      <animated.div
        className={style.contactBookIconWrapper}
        onMouseMove={(e) => {
          const { clientX: x, clientY: y } = e;
          set({ xys: calc(x, y) });
        }}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.to(trans) }}
      >
        <FcContacts className={style.contactBookIcon} />
      </animated.div>
      <div className={style.toggler}>
        <ThemeSwitcher />
      </div>
      <h1>Welcome to Contact Book App! </h1>
      <p className={style.description}>
        To start using it, you should create an account or login.
      </p>
      <button
        className={`${style.squishy} ${style.squishyTech}`}
        onClick={toggleAbout}
      >
        <MdRocketLaunch />
        Explore
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
            <h2 className={style.infoSectionTitle}>
              <FaInfoCircle />
              About the App
            </h2>
            <p>
              Contact Book App is a simple and intuitive tool to manage your
              personal and professional contacts. You can add, edit, and
              organize your contacts with ease.
            </p>
            <h2 className={style.infoSectionTitle}>
              <FaDev />
              About the Developer
            </h2>
            <p>
              This app was developed by{" "}
              <a
                className={style.nameLink}
                href="https://www.linkedin.com/in/oleksandr-kostiuchenko2/"
                target="_blank"
              >
                Alex
              </a>
              , a passionate web developer specializing in creating
              user-friendly and efficient applications. Feel free to reach out
              for feedback or collaboration!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomePage;
