import style from "./App.module.css";

//* Pages & Componets
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import ContactDetailPage from "./pages/ContactDetailPage/ContactDetailPage";
import AddPage from "./pages/AddPage/AddPage";
import FavPage from "./pages/FavPage/FavPage";
import GroupPage from "./pages/GroupPage/GroupPage";
import FamList from "./components/FamList/FamList";
import FriendList from "./components/FriendList/FriendList";
import JobList from "./components/JobList/JobList";

import Layout from "./components/Layout/Layout";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

//* Router
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

//* Redux
import { useDispatch } from "react-redux";
import { refreshUser } from "./redux/auth/operations";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/register"
          element={
            <RestrictedRoute
              component={<RegisterPage />}
              redirectTo={"/contacts"}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              component={<LoginPage />}
              redirectTo={"/contacts"}
            />
          }
        />

        <Route
          path="/contacts"
          element={
            <PrivateRoute
              component={<ContactsPage />}
              redirectTo={"/register"}
            />
          }
        />
        <Route
          path="/:contactId"
          element={
            <PrivateRoute
              component={<ContactDetailPage />}
              redirectTo={"/register"}
            />
          }
        />
        <Route
          path="/add"
          element={
            <PrivateRoute component={<AddPage />} redirectTo={"/register"} />
          }
        />
        <Route
          path="/fav"
          element={
            <PrivateRoute component={<FavPage />} redirectTo={"/register"} />
          }
        />
        <Route
          path="/groups"
          element={
            <PrivateRoute component={<GroupPage />} redirectTo={"/register"} />
          }
        >
          <Route
            path="family"
            element={
              <PrivateRoute component={<FamList />} redirectTo={"/register"} />
            }
          />
          <Route
            path="friends"
            element={
              <PrivateRoute
                component={<FriendList />}
                redirectTo={"/register"}
              />
            }
          />
          <Route
            path="job"
            element={
              <PrivateRoute component={<JobList />} redirectTo={"/register"} />
            }
          />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
