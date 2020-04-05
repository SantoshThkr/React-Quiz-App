import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import questions from './data/questions';

function startQuiz() {
  render(<App />);
  fireEvent.click(screen.getByText('Start Quiz'));
}

function answerAll(correct) {
  questions.forEach((q) => {
    const option = correct ? q.answer : q.options.find((o) => o !== q.answer);
    fireEvent.click(screen.getByLabelText(option));
    fireEvent.click(screen.getByRole('button', { name: /next|finish quiz/i }));
  });
}

test('renders the first question and its options', () => {
  startQuiz();

  expect(screen.getByText('Question 1 of 10')).toBeInTheDocument();
  expect(screen.getByText(questions[0].question)).toBeInTheDocument();
  questions[0].options.forEach((option) => {
    expect(screen.getByLabelText(option)).toBeInTheDocument();
  });
});

test('next button is disabled until an answer is selected', () => {
  startQuiz();

  expect(screen.getByText('Please select an answer.')).toBeInTheDocument();
  expect(screen.getByText('Next')).toBeDisabled();

  fireEvent.click(screen.getByLabelText('JavaScript XML'));

  expect(screen.getByLabelText('JavaScript XML')).toBeChecked();
  expect(screen.getByText('Next')).toBeEnabled();
});

test('moves to the next question', () => {
  startQuiz();

  fireEvent.click(screen.getByLabelText('JavaScript XML'));
  fireEvent.click(screen.getByText('Next'));

  expect(screen.getByText('Question 2 of 10')).toBeInTheDocument();
  expect(screen.getByText(questions[1].question)).toBeInTheDocument();
});

test('shows the score after the last question', () => {
  startQuiz();
  answerAll(true);

  expect(screen.getByText('Quiz Completed!')).toBeInTheDocument();
  expect(screen.getByText('10 / 10')).toBeInTheDocument();
  expect(screen.getByText('Percentage: 100%')).toBeInTheDocument();
});

test('restart resets the quiz', () => {
  startQuiz();
  answerAll(false);

  expect(screen.getByText('0 / 10')).toBeInTheDocument();

  fireEvent.click(screen.getByText('Restart'));

  expect(screen.getByText('Question 1 of 10')).toBeInTheDocument();
  expect(screen.getByText('Next')).toBeDisabled();
});
