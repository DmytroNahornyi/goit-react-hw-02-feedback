import styled from 'styled-components';

export const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  border: 1px;
  margin: 0 auto;
`;

export const FeedbackTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

export const FeedbackButtonContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const FeedbackButton = styled.button`
  padding: 8px 16px;
  margin-right: 16px;
  font-size: 18px;
  color: black;
  background-color: ${props => props.color};
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;

export const FeedbackMessage = styled.div`
  font-size: 18px;
`;
