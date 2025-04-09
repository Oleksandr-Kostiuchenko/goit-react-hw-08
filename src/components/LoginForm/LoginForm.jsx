//* Libraries
import style from "./LoginForm.module.css";
import toast from "react-hot-toast";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

//* Redux
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

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
const notifySuccessAdd = (personName) =>
  toast.success(`${personName} is successfully added!`);
const notifyFailure = () =>
  toast.success(`Sorry! Something went wrong...`, {
    icon: "❌",
  });

const LoginForm = () => {
  const dispatch = useDispatch();

  const onFormSubmit = (formData, actions) => {
    dispatch(login(formData));

    actions.resetForm();
  };

  return (
    <Formik
      onSubmit={onFormSubmit}
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
    >
      <Form className={style.formWrapper} autoComplete="off">
        <div className={style.inputsWrapper}>
          <div>
            <label className={style.inputLabel} htmlFor="">
              Email
            </label>
            <div className={style.inputIconWrapper}>
              <MdEmail className={style.inputIcon} />
              <Field className={style.dataInput} type="email" name="email" />
            </div>
            <ErrorMessage
              className={style.errorMessage}
              name="number"
              component="span"
            />
          </div>

          <div>
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
              name="number"
              component="span"
            />
          </div>
        </div>

        <button className={style.addButton} type="submit">
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
