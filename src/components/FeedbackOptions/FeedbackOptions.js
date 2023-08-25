import PropTypes from 'prop-types';
import css from './Feedback.module.css'
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
        return (
                <div>
                     { options.map(option => (
                    <button  className={css.button}type="button" onClick={() => onLeaveFeedback(option)}>{option}</button>
                ))}
            </div>
          
        );
   
}

FeedbackOptions.prototype = {
   options: PropTypes.string.isRequired,
	onLeaveFeedback: PropTypes.string.isRequired
}