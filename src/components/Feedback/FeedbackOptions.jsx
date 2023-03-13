import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackButtonContainer, FeedbackButton } from './Feedback.styled'


const FeedbackOptions = ({ options, onLeaveFeedback, colors }) => (
  <FeedbackButtonContainer>
    {options.map((option, index) => (
      <FeedbackButton key={option} onClick={() => onLeaveFeedback(option)} color={colors[index]}>
        {option}
      </FeedbackButton>
    ))}
  </FeedbackButtonContainer>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeedbackOptions;

