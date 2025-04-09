//* Libraries
import style from "./Layout.module.css";
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
import { useSelector } from "react-redux";
import { selectIsLoading, selectError } from "../../redux/contacts/selectors";

const Layout = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const isLoadingData = useSelector(selectIsLoading);
  const errorData = useSelector(selectError);

  return (
    <div className={style.layoutWrapper}>
      <Header setModalIsOpen={setModalIsOpen} />

      {children}

      {errorData && <Alert>Sorry! Something went wrong...</Alert>}
      {modalIsOpen && <Navigation setModalIsOpen={setModalIsOpen} />}
      {isLoadingData && <Loader />}
    </div>
  );
};

export default Layout;
