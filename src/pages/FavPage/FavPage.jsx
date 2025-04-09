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
import { selectFavContacts } from "../../redux/favcontacts/selectors";

const FavPage = () => {
  const favContacts = useSelector(selectFavContacts);
  return (
    <>
      <SearchBox />

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
