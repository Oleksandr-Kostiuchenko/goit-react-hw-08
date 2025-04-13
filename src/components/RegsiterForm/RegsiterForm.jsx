//* Libraries
import style from "./RegsiterForm.module.css";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

//* Components
import Alert from "../Alert/Alert";

//* Formik
import * as Yup from "yup";
import "yup-phone-lite";
import { Formik, Form, Field, ErrorMessage } from "formik";
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Min. 3 symbols")
    .max(50, "Max 50 symbols")
    .required("Required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Required"),
  password: Yup.string()
    .min(8, "Min. 8 symbols")
    .max(50, "Max. 50 symbols")
    .required("Required"),
});

//* Redux
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { useState } from "react";

//* Notifier
const notifySuccess = () => toast.success(`Account created successfully!`);
const notifyFailure = () =>
  toast.success(`Sorry! Something went wrong...`, {
    icon: "❌",
  });

const RegsiterForm = () => {
  const dispatch = useDispatch();
  const [alertIsVisible, setAlertIsVisible] = useState(false);

  const onFormSubmit = (formData, actions) => {
    try {
      dispatch(register(formData))
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
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={onFormSubmit}
    >
      <Form className={style.formWrapper} autoComplete="off">
        <div className={style.inputsWrapper}>
          <div className={style.inputErrorWrapper}>
            <label className={style.inputLabel} htmlFor="">
              Name
            </label>
            <div className={style.inputIconWrapper}>
              <IoPerson className={style.inputIcon} />
              <Field className={style.dataInput} type="text" name="name" />
            </div>
            <ErrorMessage
              className={style.errorMessage}
              name="name"
              component="span"
            />
          </div>

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
          Register
        </button>
        {alertIsVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Alert>Try another email or password</Alert>
          </motion.div>
        )}
      </Form>
    </Formik>
  );
};

export default RegsiterForm;
