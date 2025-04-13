//* Libraries
import style from "./DeleteModal.module.css";
import { IoClose } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import toast from "react-hot-toast";

//* Redux
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { deleteFav } from "../../redux/favcontacts/slice";
import { removeFromAllCategories } from "../../redux/category/slice";
import { selectError } from "../../redux/contacts/selectors";
import { setSelectedContact } from "../../redux/contacts/slice";
import { selectSelectedContact } from "../../redux/contacts/selectors";
import { setDeleteModalIsOpen } from "../../redux/contacts/slice";

//* Notifier
const notifySuccessRemoove = (personName) =>
  toast.success(`${personName} is successfully deleted!`, {
    icon: "❌",
  });

const notifyFailure = () =>
  toast.success(`Sorry! Something went wrong...`, {
    icon: "❌",
  });

const DeleteModal = () => {
  const dispatch = useDispatch();
  const errorData = useSelector(selectError);

  const contactData = useSelector(selectSelectedContact);

  const handleDelete = async () => {
    try {
      await dispatch(deleteContact(contactData.id)).unwrap();
      dispatch(deleteFav(contactData));
      dispatch(removeFromAllCategories(contactData));

      if (!errorData) {
        notifySuccessRemoove(contactData.name);
      }

      dispatch(setDeleteModalIsOpen(false));
      dispatch(setSelectedContact(null));
    } catch (error) {
      notifyFailure();
    }
  };

  return (
    <div className={style.modalBackdrop}>
      <div className={`${style.modal} container`}>
        <p className={style.modalTitle}>
          Are you sure you want to delete {contactData && contactData.name}?
        </p>

        <div className={style.buttonWrapper}>
          <button
            onClick={handleDelete}
            className={`${style.modalBtnCircle} ${style.markBtn}`}
          >
            <IoMdCheckmark />
          </button>
          <button
            className={`${style.modalBtnCircle} ${style.crossBtn}`}
            onClick={() => dispatch(setDeleteModalIsOpen(false))}
          >
            <IoClose />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
