import Contact from '../contact/contact';
import css from './ContactList.module.css';

export default function ContactList ({contacts, onDelete}) {
    return (
        <ul className={css.contactList}>
            {contacts.map(({id, name, number}) => (
                <li className={css.contactItem} key={id}>
                    <Contact id={id}
                    name={name}
                    number={number}
                     onDelete={onDelete}/>
                </li>
            ))};

        </ul>
    );
};