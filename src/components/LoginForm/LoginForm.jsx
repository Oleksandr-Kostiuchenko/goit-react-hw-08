//* Libraries
import style from "./LoginForm.module.css";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

//* Redux
import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../../redux/auth/operations";

//* Components
import Alert from "../Alert/Alert";

//* Formik
import * as Yup from "yup";
import "yup-phone-lite";
import { Formik, Form, Field, ErrorMessage } from "formik";
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Required"),
  password: Yup.string()
    .min(8, "Min. 8 symbols")
    .max(50, "Max. 50 symbols")
    .required("Required"),
});

//* Notifier
const notifySuccess = () => toast.success(`Successfully logged in. Welcome!`);
const notifyFailure = () =>
  toast.success(`Sorry! Something went wrong...`, {
    icon: "❌",
  });

const LoginForm = () => {
  const [alertIsVisible, setAlertIsVisible] = useState(false);

  const dispatch = useDispatch();

  const onFormSubmit = (formData, actions) => {
    try {
      dispatch(login(formData))
        .unwrap()
        .then(() => {
          notifySuccess();
          setAlertIsVisible(false);

          actions.resetForm();
        })
        .catch(() => {
          notifyFailure();
          setAlertIsVisible(true);
        });
    } catch (error) {
      notifyFailure();
    }
  };

  return (
    <Formik
      onSubmit={onFormSubmit}
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
    >
      <Form className={style.formWrapper} autoComplete="off">
        <div className={style.inputsWrapper}>
          <div className={style.inputErrorWrapper}>
            <label className={style.inputLabel} htmlFor="">
              Email
            </label>
            <div className={style.inputIconWrapper}>
              <MdEmail className={style.inputIcon} />
              <Field className={style.dataInput} type="email" name="email" />
            </div>
            <ErrorMessage
              className={style.errorMessage}
              name="email"
              component="span"
            />
          </div>

          <div className={style.inputErrorWrapper}>
            <label className={style.inputLabel} htmlFor="">
              Password
            </label>
            <div className={style.inputIconWrapper}>
              <RiLockPasswordFill className={style.inputIcon} />
              <Field
                className={style.dataInput}
                type="password"
                name="password"
              />
            </div>
            <ErrorMessage
              className={style.errorMessage}
              name="password"
              component="span"
            />
          </div>
        </div>

        <button className={style.addButton} type="submit">
          Login
        </button>
        {alertIsVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Alert>
              Incorrect account data! Try another login or password.
            </Alert>
          </motion.div>
        )}
      </Form>
    </Formik>
  );
};

export default LoginForm;
