import css from "./FeedbackOptions.module.css"
import PropTypes from "prop-types"



export const FeedbackOptions = ({ handleFeedback, options }) => {
  return (
    <div className={css.box}>
      {options.map(el => {
        return (
          <button
            className={css.btn}
            key={el}
            onClick={() => handleFeedback(el)}
          >
            {el}
          </button>
        );
      })}
    </div>
  );
};


FeedbackOptions.propTypes = {
  options : PropTypes.array.isRequired,
  handleFeedback : PropTypes.func.isRequired,
}