import { useState } from 'react';
import './App.css';
import ContactForm from './AddContactForm';
import ContactCard from './ContactCard/ContactCard';
import { v4 as uuidv4 } from "uuid";


function App() {
  const [persons, setPersons] = useState([]);
  const [personBeingEdited, setPersonBeingEdited] = useState(null);

  const handleAddContact = (newPerson) => {
    setPersons([...persons, { id: uuidv4(), ...newPerson }]);
  };

  const handleEditContact = (updatedPerson) => {
    setPersons(
      persons.map((person) => {
        if (person.id === updatedPerson.id) {
          return updatedPerson;
        }
        return person;
      })
    );
    setPersonBeingEdited(null);
  };

  const handleDeleteContact = (id) =>{
    let delContacts = persons.filter(person => person.id !== id);
    setPersons(delContacts);
  }
  return (
    <div>
      <ContactForm title='Add a new contact' onSave={handleAddContact} />
      <div>
        {persons.map((person) => {
          if (personBeingEdited && person.id === personBeingEdited) {
            return (
              <ContactForm
                title="Edit contact"
                initialPerson={person}
                onSave={handleEditContact}
              />
            );
          }
          return (
            <ContactCard
              key={person.id}
              person={person}
              onEditContact={() => setPersonBeingEdited(person.id)}
              onDeleteContact={handleDeleteContact}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
