import React from "react";
import PropTypes from "prop-types";


export const Filter = ({filter, filterHandler}) => {

    return(
        <label>
            Find contact by name
        <input name="filter" value={filter} onChange={filterHandler} type="text"/>
        </label>
    )
}

Filter.propTypes = {
    filter : PropTypes.string.isRequired,
    filterHandler : PropTypes.func.isRequired,
}