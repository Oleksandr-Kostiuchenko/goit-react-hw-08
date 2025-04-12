//* Libraries
import style from "./GroupPage.module.css";
import { useEffect } from "react";

//* Redux
import { useSelector, useDispatch } from "react-redux";
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
