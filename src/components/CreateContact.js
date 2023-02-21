import React from "react";
import ImageInput from "./ImageInput";
import { Link } from "react-router-dom";
import '../css/CreateContact.css'
import serilizeForm from 'form-serialize'

export const CreateContact = ({onCreateContact}) => {
    const submitHandler=(event)=>{
        event.preventDefault()
        let values=serilizeForm(event.target,{hash:true})

if(onCreateContact){
    onCreateContact(values)
}
    }
  return (
    <>
      <div className="create-contact-contaiter">
        <Link className="close-btn" to='/'></Link>
        <form onSubmit={submitHandler} className="create-contact-form">
          <ImageInput  className="create-contact-form-avatar-input"
          name="avatarURL"
          maxHeight={64}/>
          <div className="info">
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="handle" placeholder="Handle" />
            <button>Add Contact</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateContact;
