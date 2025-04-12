import style from "./LoginPage.module.css";

//* Components
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <div className={style.container}>
      <div className={style.registerPageWrapper}>
        <div className={style.infoWrapper}>
          <div className={style.welcomeWrapper}>
            <h2 className={style.pageTitle}>Welcome Back 👋</h2>
            <p>
              It's great to see you again! Log in to access and manage your
              contacts with ease.
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
      <div
        className={`${style.registerPageWrapper} ${style.imageWrapper}`}
      ></div>
    </div>
  );
};

export default LoginPage;
