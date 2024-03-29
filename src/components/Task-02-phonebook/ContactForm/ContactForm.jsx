import React, {Component} from "react";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from "./ContactForm.module.css"

const INITIAL_STATE = {
    name: '',
    number: '',
}

export class ContactForm extends Component {

    state = {
        name: '',
        number: '',
    }

    submitHandle = (e) => {
        e.preventDefault();
    
    const {name, number} = this.state
        const newContact = {
          name : name,
          number : number,
          id : nanoid(),
        }

        for(const {name} of this.props.contacts){
            if( name === this.state.name){
                return alert(`${name} is already in contacts`)
            }
        }
    
        this.props.addContact(newContact)
        this.setState({...INITIAL_STATE})
      }
    
      changeHandle = (e) => {
        const {name, value} = e.target
        this.setState({[name] : value})
      }

    
    render(){

        const { name, number } = this.state

        return(

            <form onSubmit={this.submitHandle} className={css.form}>
            <label>
              Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
                onChange={this.changeHandle}
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
                value={number}
                onChange={this.changeHandle}
              />
            </label>
            <button type="submit">Add contact</button>
          </form>

        )
    }
}

ContactForm.propTypes = {
    addContact : PropTypes.func.isRequired,
}