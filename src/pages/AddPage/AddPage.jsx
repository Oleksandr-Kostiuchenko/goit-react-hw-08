import style from "./AddPage.module.css";

//* Components
import ContactForm from "../../components/contactform/ContactForm";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import Loader from "../../components/Loader/Loader";
import Alert from "../../components/Alert/Alert";

//* Redux
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectIsLoading, selectError } from "../../redux/contactsSlice";

const AddPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const isLoadingData = useSelector(selectIsLoading);
  const errorData = useSelector(selectError);

  return (
    <>
      <Header setModalIsOpen={setModalIsOpen} />
      {errorData && <Alert>Sorry! Something went wrong...</Alert>}
      <ContactForm />
      {modalIsOpen && <Navigation setModalIsOpen={setModalIsOpen} />}
      {isLoadingData && <Loader />}
    </>
  );
};

export default AddPage;
