import React, { useState } from 'react';
import questions from '../data/questions';
import Progress from './Progress';
import Question from './Question';

function Quiz() {
  const [currentQuestion] = useState(0);

  return (
    <div>
      <Progress current={currentQuestion + 1} total={questions.length} />
      <Question question={questions[currentQuestion]} />
    </div>
  );
}

export default Quiz;
