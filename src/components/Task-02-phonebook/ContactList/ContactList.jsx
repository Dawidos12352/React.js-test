import React from 'react';
import PropTypes from 'prop-types';
import css from "./ContactList.module.css";

export const ContactList = ({filterText, contacts, deleteHandler}) => {

    const filteredContacts = contacts.filter(({name}) => 
    name.toLowerCase().includes(filterText.toLowerCase()))

    return(
        <ul>
            {filteredContacts.map(({name, id, number}) => 
            <li key={id}>
                <p>{name} - {number}</p>
                <button type="button" onClick={() => deleteHandler(id)} className={css.btn}>Delete</button>
            </li>)}
                        
        </ul>
    )
}

ContactList.propTypes = {
    filterText : PropTypes.string.isRequired,
    contacts : PropTypes.array.isRequired,
    deleteHandler : PropTypes.func.isRequired,
}