import PropTypes from 'prop-types';
import Notification from 'components/notification/Notification';
export const Statistics = ({ good, neutral, bad, total, PositiveFeedbackPercentage }) => {
    return (
        <>
            {total > 0 && (
                <ul>
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
                    <li>Total: {total}</li>
                    <li> Positive feedback: {PositiveFeedbackPercentage} %</li>
                </ul>
            )
            }
            {total === 0 && <Notification message="There is no feedback"></Notification>}
        </>
    )
}
Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  total: PropTypes.func.isRequired,
  PositiveFeedbackPercentage: PropTypes.func.isRequired,
};
    