import React from 'react';

function Question({ question, selectedAnswer, onSelect }) {
  return (
    <div className="question">
      <h2>{question.question}</h2>
      <div className="options">
        {question.options.map((option) => (
          <label
            key={option}
            className={option === selectedAnswer ? 'option selected' : 'option'}
          >
            <input
              type="radio"
              name="answer"
              value={option}
              checked={option === selectedAnswer}
              onChange={() => onSelect(option)}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
}

export default Question;
