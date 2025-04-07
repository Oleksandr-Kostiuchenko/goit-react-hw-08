//* Libraries
import style from "./FavPage.module.css";
import { Toaster } from "react-hot-toast";
import { useState, useEffect, useId } from "react";

//* Components
import Navigation from "../../components/Navigation/Navigation";
import SearchBox from "../../components/searchbox/SearchBox";
import Header from "../../components/Header/Header";
import FavList from "../../components/favcontactlist/FavList";
import Loader from "../../components/Loader/Loader";
import Alert from "../../components/Alert/Alert";

//* Redux
import { useSelector } from "react-redux";
import { selectIsLoading, selectError } from "../../redux/contactsSlice";
import { selectFavContacts } from "../../redux/favSlice";

const FavPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const favContacts = useSelector(selectFavContacts);
  const isLoadingData = useSelector(selectIsLoading);
  const errorData = useSelector(selectError);

  return (
    <>
      <Header setModalIsOpen={setModalIsOpen} />
      <SearchBox />

      {isLoadingData && <Loader />}

      {modalIsOpen && <Navigation setModalIsOpen={setModalIsOpen} />}

      {favContacts.length > 0 ? (
        <FavList />
      ) : (
        <Alert>No favorite contacts yet!</Alert>
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default FavPage;
