//* Libraries
import style from "./Layout.module.css";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

//* Components
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";
import Alert from "../../components/Alert/Alert";
import DeleteModal from "../DeleteModal/DeleteModal";

//* Redux
import { useSelector } from "react-redux";
import { selectIsLoading, selectError } from "../../redux/contacts/selectors";
import { selectDeleteModalIsOpen } from "../../redux/contacts/selectors";
import { selectUserTheme } from "../../redux/theme/selectors";

const Layout = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const deleteModalIsOpen = useSelector(selectDeleteModalIsOpen);

  const isLoadingData = useSelector(selectIsLoading);
  const errorData = useSelector(selectError);

  const theme = useSelector(selectUserTheme);
  document.body.className = theme;

  return (
    <div className={style.layoutWrapper}>
      <Header setModalIsOpen={setModalIsOpen} />

      {children}

      {errorData && <Alert>Sorry! Something went wrong...</Alert>}
      {modalIsOpen && <Navigation setModalIsOpen={setModalIsOpen} />}
      {deleteModalIsOpen && <DeleteModal />}
      {isLoadingData && <Loader />}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 4000 }}
      />
    </div>
  );
};

export default Layout;
