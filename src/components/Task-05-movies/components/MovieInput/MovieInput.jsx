
import css from "./MovieInput.module.css"


export const MovieInput = ({value, changeHandler}) => {


const submitHandler = (e) => {
    e.preventDefault();
}

    return(
        <form className={css.formMovie} onSubmit={submitHandler}>
            <input value={value} className={css.inputMovie} name="query" onChange={(e) => changeHandler(e.target.value)}/>
            <button  type="submit" className={css.btnMovie}>Submit</button>          
        </form>
    )
}