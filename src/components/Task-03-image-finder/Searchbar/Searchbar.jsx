import React, {Component} from "react";
import css from "./Searchbar.module.css"


export class Searchbar extends Component{

  



    render(){

        const {inputSearch, changeHandler, submitHandler} = this.props

        return(
            <header className={css.searchbar}>
                <form className={css.form} onSubmit={submitHandler}>
                    <button type="submit" className={css.button}>
                    <span className={css.buttonLabel}>Search</span>
                    </button>

                    <input
                    className={css.input}
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