import React, {Component} from "react";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';


const INITIAL_STATE = {
    name : "",
    number: "",
}
export class ContactForm extends Component {

    state = {
        name: '',
        number: '',
    }

    inputHandler = (e) => {
        const {value, name} = e.target
      this.setState((prevState) => ({
          ...prevState,
          [name] : value
      }))
      console.log("atrybut name: ", name, "jego wartosc:" , value)
    }

    submitHandler = (e) => {
      e.preventDefault();

      const newContact = {
          name: this.state.name,
          number: this.state.number,
          id: nanoid(),
      }

      for(const {name} of this.props.contacts){
        if(name === this.state.name){
            alert(`${name} is already in contacts`)
            return
        }
      }

      this.props.addContactHandler(newContact)
      this.setState({...INITIAL_STATE})
    }



    render(){

        const {name, id, number} = this.state

        return(

            <form onSubmit={this.submitHandler}>
                    <label htmlFor={id}>
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={this.inputHandler}
                    />
                    </label>
                    <label htmlFor={id}>
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        onChange={this.inputHandler}
                    />
                    </label>
                    <button type="submit" > Add contact</button>
                </form>
        )
    }
}

ContactForm.propTypes = {
    contacts : PropTypes.array.isRequired,
    addContactHandler : PropTypes.func.isRequired,
}