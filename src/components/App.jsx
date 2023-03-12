import React, { Component } from 'react';
import styled from 'styled-components';
import FeedbackOptions from './Feedback/FeedbackOptions';

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
`;

const StatisticItem = styled.p`
  margin-bottom: 10px;
`;

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedbacks = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <Container>
        <Title>Please leave your feedback</Title>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.handleLeaveFeedback}
        />
        <Title>Statistics</Title>
        {totalFeedbacks ? (
          <>
            <StatisticItem>
              Good: <span>{good}</span>
            </StatisticItem>
            <StatisticItem>
              Neutral: <span>{neutral}</span>
            </StatisticItem>
            <StatisticItem>
              Bad: <span>{bad}</span>
            </StatisticItem>
            <StatisticItem>
              Total: <span>{totalFeedbacks}</span>
            </StatisticItem>
            <StatisticItem>
              Positive feedback: <span>{positiveFeedbackPercentage}%</span>
            </StatisticItem>
          </>
        ) : (
          <p>No feedback given</p>
        )}
      </Container>
    );
  }
}
