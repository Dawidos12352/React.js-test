import React, {Component} from "react";
import css from "./Searchbar.module.css"


export class Searchbar extends Component {


    render(){

        const {changeHandler, submitHandler, searchQuery} = this.props

        return(

            <header className={css.Searchbar}>
                <form className={css.SearchForm} onSubmit={submitHandler} >
                    <button type="submit" className={css.SearchFormButton}>
                        Search
                    </button>
        
                    <input
                        className={css.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        name="searchbar"
                        value={searchQuery}
                        onChange={changeHandler}
                    />
                </form>
            </header>
        )
    }
}

