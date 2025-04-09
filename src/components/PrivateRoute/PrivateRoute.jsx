import style from "./PrivateRoute.module.css";

//* Redux
import { useSelector } from "react-redux";
import { selectisLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, redirectTo }) => {
  const isLoggedIn = useSelector(selectisLoggedIn);

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
