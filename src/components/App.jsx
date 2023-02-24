import { Component } from 'react';
import { Section } from "components/section/Section";
import { FeedbackOptions } from "components/feedback/FeedbackOptions";
import { Statistics } from "components/statistics/Statistics";
import { FEEDBACK_OPTIONS } from 'data/constants';
import { Container } from './App.styled';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  handleFeedback = ({ target }) => {
    const {feedback} = target.dataset
    this.setState(prevState => ({[feedback]: prevState[feedback] + 1}))
  }
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state
    return good + neutral + bad
  }
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback()
    return total ?(good*100) / total : 0
  }
  render() {
    const { good, neutral, bad } = this.state
    const total = this.countTotalFeedback()
    const PositiveFeedbackPercentage = this.countPositiveFeedbackPercentage()
    return <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={FEEDBACK_OPTIONS} onLeaveFeedback={this.handleFeedback}>
          </FeedbackOptions>
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          PositiveFeedbackPercentage={PositiveFeedbackPercentage.toFixed(0)}>
          </Statistics>
      </Section>
    </Container>
      
    
  }
};
