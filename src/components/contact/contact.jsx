import css from './contact.module.css';
import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

export default function Contact({ id, name, number, onDelete }) {
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
            <button className={css.button} onClick={() => onDelete(id)}>
                Delete
            </button>
        </>
    );
};