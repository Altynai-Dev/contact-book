import React from 'react';
import './ContactCard.css';

const ContactCard = ({person, onEditContact, onDeleteContact}) => {
  return (
    <div>
        <h3>Name: {person.name}</h3>
        <div className='personImgCont'>
            <img src={person.image} className='personImage' alt={person.name}/>
        </div>
        <p>Phone: {person.number}</p>
        <div>
        <button onClick={onEditContact}>Edit</button>
        <button onClick={()=>onDeleteContact(person.id)}>Delete</button>
      </div>
    </div>
  )
}

export default ContactCard