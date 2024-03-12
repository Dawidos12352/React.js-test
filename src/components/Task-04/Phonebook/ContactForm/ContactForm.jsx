import React, { useState} from "react";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from "./ContactForm.module.css"

const state = {
    name: '',
    number: '',
}

export const ContactForm = ({contacts, addContact}) => {


    const [contact, setContact] = useState(state)
    


    const submitHandle = (e) => {
        e.preventDefault();
    
    const {name, number} = contact
        const newContact = {
          name : name,
          number : number,
          id : nanoid(),
        }

        for(const {name} of contacts){
            if( name === contact.name){
                return alert(`${name} is already in contacts`)
            }
        }
    
       addContact(newContact)
        setContact({name: "", number: ""})
      }
    
      const changeHandle = (e) => {
        const {name, value} = e.target
        setContact({ ...contact,
          [name] : value
        })
      }

        return(

            <form onSubmit={submitHandle} className={css.form}>
            <label>
              Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={contact.name}
                onChange={changeHandle}
              />
            </label>
            <label>
              Number
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={contact.number}
                onChange={changeHandle}
              />
            </label>
            <button type="submit">Add contact</button>
          </form>

        )
    }


ContactForm.propTypes = {
    addContact : PropTypes.func.isRequired,
}