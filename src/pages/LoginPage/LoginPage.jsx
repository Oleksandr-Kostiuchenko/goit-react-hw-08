//* Libraries
import style from "./LoginPage.module.css";
import { motion } from "framer-motion";

//* Components
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <div className={style.container}>
      <div className={style.registerPageWrapper}>
        <div className={style.infoWrapper}>
          <motion.div
            className={style.welcomeWrapper}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className={style.pageTitle}>Welcome Back 👋</h2>
              <p>
                It's great to see you again! Log in to access and manage your
                contacts with ease.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }}
            transition={{ duration: 0.5 }}
          >
            <LoginForm />
          </motion.div>
        </div>
      </div>
      <div
        className={`${style.registerPageWrapper} ${style.imageWrapper}`}
      ></div>
    </div>
  );
};

export default LoginPage;
