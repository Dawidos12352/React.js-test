import PropTypes from "prop-types"
import css from "./Statistics.module.css"


export const Statistics = ({good, neutral, bad, total , positivePercentage}) => {

    return(
        <div className={css.box}>
        <p>Good : {good}</p>
        <p>Neutral : {neutral}</p>
        <p>Bad : {bad}</p>
        <p>Total : {total}</p>
        <p>Positive feedback : {positivePercentage}%</p>

    </div>
    )
}

Statistics.propTypes = {
    good : PropTypes.number,
    neutral : PropTypes.number,
    bad : PropTypes.number,
    total : PropTypes.number.isRequired,
    positivePercentage : PropTypes.number.isRequired,
}
