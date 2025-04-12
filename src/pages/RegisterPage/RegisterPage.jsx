import style from "./RegisterPage.module.css";

//* Components
import RegsiterForm from "../../components/RegsiterForm/RegsiterForm";

const RegisterPage = () => {
  return (
    <div className={style.container}>
      <div className={style.registerPageWrapper}>
        <div className={style.infoWrapper}>
          <div className={style.welcomeWrapper}>
            <h2 className={style.pageTitle}>Welcome 👋</h2>
            <p>
              Today is a new day. It's your day. You shape it. Register to start
              managing your contacts.
            </p>
          </div>
          <RegsiterForm />
        </div>
      </div>
      <div
        className={`${style.registerPageWrapper} ${style.imageWrapper}`}
      ></div>
    </div>
  );
};

export default RegisterPage;
