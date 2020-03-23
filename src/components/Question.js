import React from 'react';

function Question({ question }) {
  return (
    <div className="question">
      <h2>{question.question}</h2>
      <div className="options">
        {question.options.map((option) => (
          <label key={option} className="option">
            <input type="radio" name="answer" value={option} />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
}

export default Question;
