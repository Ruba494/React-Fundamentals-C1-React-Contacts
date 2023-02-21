import { useState, useEffect } from "react";
import "../css/App.css";
import { ContactList } from "./ContactList";
import * as ContactsAPI from "../utils/ContactsAPI";
import { Routes, Route, useNavigate } from "react-router-dom";
import CreateContact from "./CreateContact";

const App = () => {
  let navigate=useNavigate()
  const [contacts, setContacts] = useState([]);
  const removeContact = (contact) => {
    ContactsAPI.remove(contact)
    setContacts(contacts.filter((c) => c.id !== contact.id));
  };
  
  const createContact=(contact)=>{
    const create = async () => {
      const res = await ContactsAPI.create(contact);
      setContacts(contacts.concat(res));
    };
    create();
    navigate('/')
  }

  useEffect(() => {
    const getContacts = async () => {
      const res = await ContactsAPI.getAll();
      setContacts(res);
    };
    getContacts();
  }, []);

  return (
    <>

    <Routes>
      <Route exact path="/" element={<ContactList contacts={contacts} onDeleteContact={removeContact} />}/>
    </Routes>

    <Routes>
      <Route path="/create-contact" element={<CreateContact onCreateContact={(contact)=>createContact(contact)}/>}/>
    </Routes>

    </>
  );
};

export default App;
