import React from 'react';
import PropTypes from 'prop-types';
import css from "./ContactList.module.css";

export const ContactList = ({contacts, filter, deleteContact}) => {

    const filteredContacts = contacts.filter(({name}) => 
    name.toLowerCase().includes(filter.toLowerCase()))
    return(
        <ul>
        {filteredContacts.map(({name, id, number }) => (
            <li  key={id}>
                <p>{name} - {number}</p>
                <button type='button' className={css.btn} onClick={() =>deleteContact(id)}>Delete</button>
            </li>
        ))}
      </ul>
    )
}

ContactList.propTypes = {
    filter : PropTypes.string.isRequired,
    deleteContact : PropTypes.func.isRequired,
    contacts : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.string.isRequired,
            name : PropTypes.string.isRequired,
            number : PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
}