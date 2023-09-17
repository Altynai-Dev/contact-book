import React, {useState} from 'react'

const ContactForm = ({onSave, title, initialPerson = null}) => {
    const [person, setPerson] = useState(initialPerson);
    
    const handleSave = (e) => {
        e.preventDefault();
    
        if (!person) {
          return;
        }
    
        onSave(person);
        setPerson(null);
      };
  return (
    <div>
        <form onSubmit={handleSave}>
        <div style={{ border: "1px solid lightgray", padding: "10px" }}>
            <h3>{title}</h3>
        <label style={{ paddingRight: "10px" }}>
            Name: 
          <input
            type="text"
            placeholder="Enter the contact's name"
            value={person?.name || ""}
            onChange={(e) =>
              setPerson({ ...person, name: e.target.value })
            }
          />
          </label>

          <label style={{ paddingRight: "10px" }}>Image: 
          <input
            type="text"
            placeholder="Enter image"
            value={person?.image}
            onChange={(e) =>
              setPerson({ ...person, image: e.target.value })
            }
          />
          </label>
          

          <label style={{ paddingRight: "10px" }}>
            Phone: 
            <input
            type="number"
            placeholder="Enter phone number"
            value={person?.number}
            onChange={(e) =>
              setPerson({ ...person, number: e.target.value })
            }
          />
          </label>
          
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm