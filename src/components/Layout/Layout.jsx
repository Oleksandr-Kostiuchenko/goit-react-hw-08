//* Libraries
import style from "./Layout.module.css";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

//* Components
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
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 4000 }}
      />
    </div>
  );
};

export default Layout;
