import PropTypes from 'prop-types';
import Notification from 'components/notification/Notification';
import { OptionsItem, OptionsList, NotificationMessage } from './Statistics.styled';
export const Statistics = ({ good, neutral, bad, total, PositiveFeedbackPercentage, id }) => {
    return (
        <>
            {total > 0 && (
                <OptionsList>
                    <OptionsItem key={id}>Good: {good}</OptionsItem>
                    <OptionsItem key={id}>Neutral: {neutral}</OptionsItem>
                    <OptionsItem key={id}>Bad: {bad}</OptionsItem>
                    <OptionsItem key={id}>Total: {total}</OptionsItem>
                    <OptionsItem key={id}> Positive feedback: {PositiveFeedbackPercentage}%</OptionsItem>
                </OptionsList>
            )
            }
            <NotificationMessage>
                {total === 0 && <Notification message="There is no feedback"></Notification>}
                </NotificationMessage>
        </>
    )
}
Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  total: PropTypes.number.isRequired,
  PositiveFeedbackPercentage: PropTypes.string.isRequired,
};
    