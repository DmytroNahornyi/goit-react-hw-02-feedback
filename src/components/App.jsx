import React from 'react';
import PropTypes from 'prop-types';
import Statistics from './Feedback/Statistics';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Section from './Feedback/Section';
import Notification from './Feedback/Notification';
import { FeedbackContainer, FeedbackTitle } from './Feedback/Feedback.styled';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: { good: 0, neutral: 0, bad: 0 },
    };
  }

  handleFeedback = option => {
    this.setState(prevState => ({
      feedback: {
        ...prevState.feedback,
        [option]: prevState.feedback[option] + 1,
      },
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state.feedback).reduce(
      (total, value) => total + value,
      0
    );
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const positive = this.state.feedback.good;
    return total > 0 ? Math.round((positive / total) * 100) : 0;
  };

  render() {
    const totalFeedback = this.countTotalFeedback();

    return (
      <FeedbackContainer>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleFeedback}
            colors={['green', 'gray', 'red']}
          />
        </Section>
        <FeedbackTitle title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics
              good={this.state.feedback.good}
              neutral={this.state.feedback.neutral}
              bad={this.state.feedback.bad}
              total={totalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </FeedbackTitle>
      </FeedbackContainer>
    );
  }
}

App.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
  handleFeedback: PropTypes.func,
  countTotalFeedback: PropTypes.func,
  countPositiveFeedbackPercentage: PropTypes.func,
};

export default App;
