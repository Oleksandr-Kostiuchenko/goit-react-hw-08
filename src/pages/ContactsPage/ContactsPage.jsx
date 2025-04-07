//* Libraries
import style from "./ContactsPage.module.css";
import { useState, useEffect, useId } from "react";

//* Components
import ContactList from "../../components/contactlist/ContactList";
import SearchBox from "../../components/searchbox/SearchBox";
import AlphabetFilter from "../../components/alphabetFilter/AlphabetFilter";
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";
import Alert from "../../components/Alert/Alert";

//* Redux
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import { useSelector } from "react-redux";
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from "../../redux/contactsSlice";

const ContactsPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const dispatch = useDispatch();
  const contactsData = useSelector(selectContacts);
  const isLoadingData = useSelector(selectIsLoading);
  const errorData = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Header setModalIsOpen={setModalIsOpen} />
      <SearchBox />

      {errorData && <Alert>Sorry! Something went wrong...</Alert>}

      <div className={style.contactsWrapper}>
        {contactsData.length > 1 && <AlphabetFilter />}
        <ContactList />
      </div>
      {modalIsOpen && <Navigation setModalIsOpen={setModalIsOpen} />}
      {isLoadingData && <Loader />}
    </>
  );
};

export default ContactsPage;
