import React from "react";
import PropTypes from "prop-types";


export const Filter = ({filterText, filterHandler}) => {


    return(
        <label >
            Find contact by name
        <input name="filter" value={filterText} onChange={filterHandler} type="text"/>
        </label>
    )
}

Filter.propTypes = {
    filterText : PropTypes.string.isRequired,
    filterHandler : PropTypes.func.isRequired,
}