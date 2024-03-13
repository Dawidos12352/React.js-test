import css from "./Button.module.css"

export const Button = ({handleButton}) => {

    return(
        <button 
        type="button" 
        onClick={() => handleButton()}
        className={css.Button}
        >Load more...</button>
    )
}