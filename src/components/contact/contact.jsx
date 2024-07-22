import css from './contact.module.css';
import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

export default function Contact({ id, name, number }) {
    const dispatch = useDispatch();
    const handleDelete = () => {
      dispatch(deleteContact(id));
    };
    return (
        <>
        <div className={css.contacts}>
          <div className={css.contact}>
            <IoPerson />
            {name}
          </div>
          <div className={css.contact}>
            <FaPhoneAlt />
            {number}
          </div>
        </div>
        <button className={css.button} type="button" onClick={handleDelete}>
          Delete
        </button>
      </>
    );
  }