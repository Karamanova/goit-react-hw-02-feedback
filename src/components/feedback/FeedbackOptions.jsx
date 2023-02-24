import PropTypes from 'prop-types';
import { FeedbackBox, OptionButtons } from './FeedbackOptions.styled';
const FeedbackButton = ({ feedback, onLeaveFeedback, id }) => {
    return (
        <OptionButtons
            key={id}
            type="button"
            data-feedback={feedback}
            onClick={onLeaveFeedback}>
            {feedback}
            </OptionButtons>
    )
}
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return <FeedbackBox>
    {options.map((option, id) => (
      <FeedbackButton 
            feedback={option}
            onLeaveFeedback={onLeaveFeedback}
            key={id}
      />
    ))}
        </FeedbackBox>
    
}
FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired,
}