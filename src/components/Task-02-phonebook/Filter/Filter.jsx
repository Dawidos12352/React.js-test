import React from "react";
import PropTypes from "prop-types";


export const Filter = ({filterText, filterHandler}) => {

    return(
        <label >
                        Find number by name 
                        <input
                            type="text"
                            name="filter"
                            value={filterText}
                            onChange={filterHandler}
                        />
                    </label>  
    )
}

Filter.propTypes = {
    filterText : PropTypes.string.isRequired,
    filterHandler : PropTypes.func.isRequired,
}