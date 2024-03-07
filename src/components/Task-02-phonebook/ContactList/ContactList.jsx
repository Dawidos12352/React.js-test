import React from 'react';
import PropTypes from 'prop-types';
import css from "./ContactList.module.css";



export const ContactList = ({contacts, filterText, deleteHandler}) => {


    const filteredContacts = contacts.filter(({name}) => 
    name.toLocaleLowerCase().includes(filterText.toLocaleLowerCase()))

    return(

         <ul>
            {filteredContacts.map(({id, name, number}) => (
                <li key={id} className={css.listItem}>
                    <p>{name} - {number}</p>
                    <button type="button" onClick={() => deleteHandler(id)} className={css.btn}>Delete</button>
                </li>
            ))}
        </ul>
      
    )
}

ContactList.propTypes = {
    contacts : PropTypes.array.isRequired,
    filterText : PropTypes.string.isRequired,
    deleteHandler : PropTypes.func.isRequired,
}