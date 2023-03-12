import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  margin-right: 10px;
  padding: 5px 10px;
  border: none;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <Button key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </Button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

// В компоненте FeedbackOptions мы импортируем React, PropTypes и styled-components.
// Далее создаем стилизованную кнопку с помощью библиотеки styled-components. Затем создаем компонент FeedbackOptions,
// который принимает два пропа: options и onLeaveFeedback.

// Проп options - это массив строк с вариантами обратной связи, проп onLeaveFeedback - это функция,
// которая вызывается при клике на кнопку и передает выбранный вариант обратной связи.

// Компонент FeedbackOptions отображает кнопки с вариантами обратной связи с помощью метода map().
// Каждая кнопка имеет уникальный ключ (с помощью свойства key), текстовое содержание (выводится элемент массива options)
// и обработчик клика onClick, который вызывает функцию onLeaveFeedback с передачей выбранного варианта обратной связи в качестве аргумента.
