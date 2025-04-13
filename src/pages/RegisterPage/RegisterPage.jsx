//* Libraries
import style from "./RegisterPage.module.css";
import { motion } from "framer-motion";

//* Components
import RegsiterForm from "../../components/RegsiterForm/RegsiterForm";

const RegisterPage = () => {
  return (
    <div className={style.container}>
      <div className={style.registerPageWrapper}>
        <div className={style.infoWrapper}>
          <motion.div
            className={style.welcomeWrapper}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={style.pageTitle}>Welcome 👋</h2>
            <p>
              Today is a new day. It's your day. You shape it. Register to start
              managing your contacts.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }}
            transition={{ duration: 0.5 }}
          >
            <RegsiterForm />
          </motion.div>
        </div>
      </div>
      <div
        className={`${style.registerPageWrapper} ${style.imageWrapper}`}
      ></div>
    </div>
  );
};

export default RegisterPage;
