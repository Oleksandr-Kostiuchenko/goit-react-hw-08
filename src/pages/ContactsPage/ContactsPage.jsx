//* Libraries
import style from "./ContactsPage.module.css";
import { useEffect, useState } from "react";

//* Components
import ContactList from "../../components/contactlist/ContactList";
import SearchBox from "../../components/searchbox/SearchBox";
import AlphabetFilter from "../../components/alphabetFilter/AlphabetFilter";
import DeleteModal from "../../components/DeleteModal/DeleteModal";

//* Redux
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { useSelector } from "react-redux";
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from "../../redux/contacts/selectors";
import { selectUser } from "../../redux/auth/selectors";
import { setFavUser, fetchFavs } from "../../redux/favcontacts/slice";
import { setGroupUser, fetchGroups } from "../../redux/category/slice";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contactsData = useSelector(selectContacts);
  const userData = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (userData.email) {
      dispatch(setFavUser(userData.email));
      dispatch(fetchFavs());

      dispatch(setGroupUser(userData.email));
      dispatch(fetchGroups());
    }
  }, [dispatch, userData.email]);

  return (
    <>
      <SearchBox />

      <div className={style.contactsWrapper}>
        {contactsData.length > 1 && <AlphabetFilter />}
        <ContactList />
      </div>
    </>
  );
};

export default ContactsPage;
