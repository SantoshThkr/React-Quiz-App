import React from 'react';

function Result({ score, total, onRestart }) {
  const percentage = Math.round((score / total) * 100);

  let message = 'Keep practicing!';
  if (percentage >= 80) {
    message = 'Great job!';
  } else if (percentage >= 50) {
    message = 'Good effort!';
  }

  return (
    <div className="result">
      <h2>Quiz Completed!</h2>
      <p>Your Score</p>
      <p className="score">
        {score} / {total}
      </p>
      <p>Percentage: {percentage}%</p>
      <p className="message">{message}</p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
}

export default Result;
