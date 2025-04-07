//* Libraries
import style from "./ContactDetailPage.module.css";
import { IoChevronBack } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { BsCameraVideo } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { MdWork } from "react-icons/md";

//* Components
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import Loader from "../../components/Loader/Loader";

//* Redux
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from "../../redux/contactsSlice";
import { useEffect, useState } from "react";
import { editContact } from "../../redux/contactsOps";

import { toggleFam, toggleFriend, toggleJob } from "../../redux/categorySlice";

//* Router
import { NavLink } from "react-router-dom";

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
const notifySuccess = () => toast.success(`Success!`);

const notifyFailure = () =>
  toast.success(`Sorry! Something went wrong...`, {
    icon: "❌",
  });

const ContactDetailPage = () => {
  const dispatch = useDispatch();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editActivated, setEditActivated] = useState(false);

  const toggleEdit = () => {
    setEditActivated(!editActivated);
  };

  const onFormSubmit = async (formData, actions) => {
    try {
      await dispatch(
        editContact({
          ...contactData,
          ...formData,
        })
      ).unwrap();

      if (!errorData) {
        notifySuccess();
      }
      actions.resetForm();
      setEditActivated(false);
    } catch (error) {
      notifyFailure();
    }
  };

  const isLoading = useSelector(selectIsLoading);
  const errorData = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const { contactId } = useParams();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contactData = contacts.find((el) => el.id === contactId);

  if (isLoading || !contactData) {
    return <Loader />;
  }

  const name = contactData.name.split(" ");
  const firstName = name[0];
  const secondName = name[1];

  return (
    <>
      <Header setModalIsOpen={setModalIsOpen} />

      <div className={style.buttonsWrapper}>
        <NavLink className={style.backBtn} to="/">
          <IoChevronBack className={style.backIcon} />
        </NavLink>

        <button className={style.editBtn} onClick={toggleEdit}>
          <CiEdit color="white" className={style.backIcon} />
        </button>
      </div>

      <div className={style.contactWrapper}>
        <div
          className={style.personAvatar}
          style={{ backgroundColor: contactData.color }}
        >
          {firstName[0]}
          {secondName !== undefined && secondName[0]}
        </div>
        <div className={style.infoWrapper}>
          {!editActivated ? (
            <>
              <p className={style.contactName}>{contactData.name}</p>
              <p className={style.contactPhone}>{contactData.number}</p>
            </>
          ) : (
            <Formik
              initialValues={{ name: "", number: "" }}
              onSubmit={onFormSubmit}
              validationSchema={validationSchema}
            >
              <Form className={style.formWrapper} autoComplete="off">
                <div>
                  <div className={style.inputIconWrapper}>
                    <BsPersonFill className={style.inputIcon} />
                    <Field
                      className={style.dataInput}
                      type="text"
                      name="name"
                      placeholder="Name"
                    />
                  </div>
                  <ErrorMessage
                    className={style.errorMessage}
                    name="name"
                    component="span"
                  />
                </div>

                <div>
                  <div className={style.inputIconWrapper}>
                    <FaPhone className={style.inputIcon} />
                    <Field
                      className={style.dataInput}
                      type="number"
                      name="number"
                      placeholder="Number"
                    />
                  </div>
                  <ErrorMessage
                    className={style.errorMessage}
                    name="number"
                    component="span"
                  />
                </div>

                <button className={style.saveBtn} type="submit">
                  <FiEdit2 />
                  Save
                </button>
              </Form>
            </Formik>
          )}
        </div>
        <div className={style.callWrappper}>
          <a
            style={{ backgroundColor: "#00ba88" }}
            className={style.callBtn}
            href={`tel:${contactData.number}`}
          >
            <IoChatbubbleEllipsesOutline className={style.callIcon} />
          </a>
          <a
            style={{ backgroundColor: "#4680ff" }}
            className={style.callBtn}
            href={`tel:${contactData.number}`}
          >
            <FiPhone className={style.callIcon} />
          </a>
          <a
            style={{ backgroundColor: "#f55858" }}
            className={style.callBtn}
            href={`tel:${contactData.number}`}
          >
            <BsCameraVideo className={style.callIcon} />
          </a>
          <a
            style={{ backgroundColor: "#d9dbe9" }}
            className={style.callBtn}
            href={`tel:${contactData.number}`}
          >
            <MdOutlineMailOutline color="#4E4B66" className={style.callIcon} />
          </a>
        </div>

        <div className={style.groupWrapper}>
          <button
            className={style.groupBtn}
            onClick={() => {
              notifySuccess();
              dispatch(toggleFam(contactData));
            }}
          >
            Add to family <MdOutlineFamilyRestroom />
          </button>
          <button
            className={style.groupBtn}
            onClick={() => {
              notifySuccess();
              dispatch(toggleFriend(contactData));
            }}
          >
            Add to friends <FaUserFriends />
          </button>
          <button
            className={style.groupBtn}
            onClick={() => {
              notifySuccess();
              dispatch(toggleJob(contactData));
            }}
          >
            Add to job <MdWork />
          </button>
        </div>
      </div>

      {modalIsOpen && <Navigation setModalIsOpen={setModalIsOpen} />}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default ContactDetailPage;
