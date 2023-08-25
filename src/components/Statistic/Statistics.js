import PropTypes from 'prop-types';
import css from './Statistic.module.css'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        
        <ul>
            <li className={css.item}>Good: {good}</li>
            <li className={css.item}>Neutral: {neutral}</li>
            <li className={css.item}>Bad: {bad}</li>
            <li className={css.item}>Total: {total}</li>
            <li className={css.item}>Positive feedback: {positivePercentage}%</li>
        </ul>
       
    );
};

Statistics.propTypes = {
    good: PropTypes.string.isRequired,
    neutral: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
    total: PropTypes.string.isRequired,
    positivePercentage: PropTypes.string.isRequired,
}