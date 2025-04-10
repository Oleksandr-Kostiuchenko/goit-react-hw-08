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
import { useSelector, useDispatch } from "react-redux";
import { selectFavContacts } from "../../redux/favcontacts/selectors";
import { selectUser } from "../../redux/auth/selectors";
import { fetchFavs, setFavUser } from "../../redux/favcontacts/slice";

const FavPage = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);
  const favContacts = useSelector(selectFavContacts);

  useEffect(() => {
    if (userData.email) {
      dispatch(setFavUser(userData.email));
      dispatch(fetchFavs());
    }
  }, [dispatch, userData.email]);

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
