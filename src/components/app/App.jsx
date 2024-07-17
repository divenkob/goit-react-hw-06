import { useState, useEffect } from 'react';
import ContactForm from '../contactForm/ContactForm';
import ContactList from '../contactList/ContactList';
import SearchBox from '../searchBox/SearchBox';
import DataContacts from '../../contacts.json';

export default function App() {
  const [contacts, setContacts] = useState(() => {
      const storedContacts = localStorage.getItem("contacts");
      return storedContacts ? JSON.parse(storedContacts) : DataContacts;
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
      localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
      setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContact = (id) => {
      setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  };

  const visibleContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
      <div>
          <h1>Phonebook</h1>
          <ContactForm addContact={addContact} />
          <SearchBox filter={filter} onFilter={setFilter} />
          <ContactList contacts={visibleContacts} onDelete={deleteContact} />
      </div>
  );
}


