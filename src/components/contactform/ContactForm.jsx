//* Libraries
import style from "./ContactForm.module.css";
import { IoPersonAdd } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { motion } from "framer-motion";
import { nanoid } from "nanoid";
import toast, { Toaster } from "react-hot-toast";

// * Redux
import { useDispatch, useSelector } from "react-redux";
import { selectError } from "../../redux/contactsSlice";
import { addContact } from "../../redux/contactsOps";

//* Formik
import * as Yup from "yup";
import "yup-phone-lite";
import { Formik, Form, Field, ErrorMessage } from "formik";
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Min. 3 symbols")
    .max(50, "Max 50 symbols")
    .required("Required"),
  number: Yup.string()
    .phone("", "Please enter a valid phone number")
    .required("A phone number is required"),
});

//* Notifier
const notifySuccessAdd = (personName) =>
  toast.success(`${personName} is successfully added!`);

const notifyFailure = () =>
  toast.success(`Sorry! Something went wrong...`, {
    icon: "❌",
  });

const ContactForm = () => {
  const errorData = useSelector(selectError);
  const dispatch = useDispatch();

  const onFormSubmit = async (formData, actions) => {
    try {
      await dispatch(
        addContact({
          ...formData,
          id: `${nanoid(16)}`,
        })
      ).unwrap();

      if (!errorData) {
        notifySuccessAdd(formData.name);
      }
      actions.resetForm();
    } catch (error) {
      notifyFailure();
    }
  };

  return (
    <>
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={onFormSubmit}
        validationSchema={validationSchema}
      >
        <motion.div
          className={style.pageHeader}
          initial={{ opacity: 0, x: -90 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Form className={style.formWrapper} autoComplete="off">
            <div className={style.inputsWrapper}>
              <div>
                <label className={style.inputLabel} htmlFor="">
                  Name
                </label>
                <div className={style.inputIconWrapper}>
                  <IoPersonAdd className={style.inputIcon} />
                  <Field className={style.dataInput} type="text" name="name" />
                </div>
                <ErrorMessage
                  className={style.errorMessage}
                  name="name"
                  component="span"
                />
              </div>

              <div>
                <label className={style.inputLabel} htmlFor="">
                  Number
                </label>
                <div className={style.inputIconWrapper}>
                  <FaPhone className={style.inputIcon} />
                  <Field
                    className={style.dataInput}
                    type="text"
                    name="number"
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
              Add contact
            </button>
          </Form>
        </motion.div>
      </Formik>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default ContactForm;
