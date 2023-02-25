import PropTypes from 'prop-types';
import { OptionsItem, OptionsList } from './Statistics.styled';
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
            
        </>
    )
}
Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  total: PropTypes.number.isRequired,
  PositiveFeedbackPercentage: PropTypes.string.isRequired,
};
    