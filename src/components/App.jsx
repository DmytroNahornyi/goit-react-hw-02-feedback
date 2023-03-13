import { useState } from 'react';
import Statistics from './Feedback/Statistics';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Section from './Feedback/Section';
import Notification from './Feedback/Notification';
import { FeedbackContainer, FeedbackTitle } from './Feedback/Feedback.styled';

function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = option => {
    setFeedback(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce((total, value) => total + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const positive = feedback.good;
    return total > 0 ? Math.round((positive / total) * 100) : 0;
  };

  return (
    <FeedbackContainer>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
          colors={['green', 'gray', 'red']}
        />
      </Section>
      <FeedbackTitle title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </FeedbackTitle>
    </FeedbackContainer>
  );
}

export default App;
