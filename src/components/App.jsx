import { Component } from 'react';
import { Section } from "components/Section/Section";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Statistics/Statistics";
import Notification from 'components/Notification/Notification';
import {NotificationMessage} from './App.styled';
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
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleFeedback}>
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
        <NotificationMessage>
                {total === 0 && <Notification message="There is no feedback"></Notification>}
                </NotificationMessage>
      </Section>
    </Container>
      
    
  }
};
