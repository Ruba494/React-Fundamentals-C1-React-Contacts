import React, { useState } from "react";
import '../css/ContactList.css'
import PropTypes  from "prop-types";
import { Link } from "react-router-dom";



export const ContactList = ({contacts, onDeleteContact}) => {
   
    const [query,setQuery]=useState('')

    const updateQuery=(query)=>{
        setQuery(query.trim())
    }
    const clearQuery=(query)=>{
        setQuery('')
    }

    const showingContacts= query===''?contacts:contacts.filter((c)=>c.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <>
    <div className="contacts-top">
        <input 
        className="contacts-serch"
        value={query}
        type='text'
        onChange={(event)=>{
            updateQuery(event.target.value)
        }}
        placeholder='Search Contacts'
         />
         <Link className="create-contact" to='/create-contact'>

         </Link>
    </div>

    {
        showingContacts.length!==contacts.length&&(
           <div className="show-contacts">
<span>Now Showing {showingContacts.length} of {contacts.length} contacts</span>
<button onClick={clearQuery}>Show all</button>
           </div>
        )
    }
    <div className="contacts-container">
      <ol className="contact-list">
        {showingContacts.map((contact) => (
          <li key={contact.id} className="contact-item">
            <div className="contact-avatar" style={{backgroundImage:`url(${contact.avatarURL})`}}></div>
            <div className="contact-info">
              <p>{contact.name}</p>
              <span>{contact.handle}</span>
            </div>
            <div>
              <button className="contact-remove" onClick={()=>onDeleteContact(contact)}></button>
            </div>
          </li>
        ))}
      </ol>
      </div>
    </>
  );
};

ContactList.proptype={
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
};
