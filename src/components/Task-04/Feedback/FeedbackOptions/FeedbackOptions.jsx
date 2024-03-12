import css from "./FeedbackOptions.module.css"
import PropTypes from "prop-types"


export const FeedbackOptions = ({options , onLeaveFeedback}) => {

    return(
        <div className={css.box}>
            {options.map(el => {
                return(
                    <button 
                    key={`${el}`} 
                    onClick={() => onLeaveFeedback(el)}
                    className={css.btn}
                    >
                    {el}
                    </button>
                )
                    }
            )}
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}


