import React, {Component} from "react";
import css from "./Searchbar.module.css"


export class Searchbar extends Component{

  



    render(){

        const {inputSearch, changeHandler, submitHandler} = this.props

        return(
            <header className={css.Searchbar}>
            <form className={css.SearchForm} onSubmit={submitHandler}>
              <button type="submit" className={css.SearchFormButton}>
              🔍
              </button>

                    <input
                    className={css.SearchFormInput}
                    name="inputSearch"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value ={inputSearch}
                    onChange={changeHandler}
                    />
                </form>
            </header>
        )
    }

}