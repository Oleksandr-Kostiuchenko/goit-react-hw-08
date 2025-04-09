import style from "./RestrictedRoute.module.css";

//* Redux
import { useSelector } from "react-redux";
import { selectisLoggedIn } from "../../redux/auth/selectors";

//* Router
import { Navigate, NavLink } from "react-router-dom";

const RestrictedRoute = ({ component: Component, redirectTo }) => {
  const isLoggedIn = useSelector(selectisLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
