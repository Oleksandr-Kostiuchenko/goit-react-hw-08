//* Libraries
import style from "./GroupPage.module.css";
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
import { selectIsLoading, selectError } from "../../redux/contacts/selectors";
import { selectFavContacts } from "../../redux/favcontacts/selectors";
import { selectUser } from "../../redux/auth/selectors";
import { setFavUser, fetchFavs } from "../../redux/favcontacts/slice";

//* Router
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const GroupPage = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);

  useEffect(() => {
    if (userData.email) {
      dispatch(setFavUser(userData.email));
      dispatch(fetchFavs());
    }
  }, [dispatch, userData.email]);

  return (
    <>
      <ul className={style.navList}>
        <li className={style.navItem}>
          <NavLink to="family">Family</NavLink>
        </li>
        <li className={style.navItem}>
          <NavLink to="friends">Friends</NavLink>
        </li>
        <li className={style.navItem}>
          <NavLink to="job">Job</NavLink>
        </li>
      </ul>

      <Outlet />
    </>
  );
};

export default GroupPage;
