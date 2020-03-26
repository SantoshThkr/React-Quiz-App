import React, { useState } from 'react';
import questions from '../data/questions';
import Progress from './Progress';
import Question from './Question';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [finished, setFinished] = useState(false);

  const isLastQuestion = currentQuestion === questions.length - 1;

  const handleNext = () => {
    if (!selectedAnswer) {
      return;
    }

    if (isLastQuestion) {
      setFinished(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
    }
  };

  if (finished) {
    return <h2 className="result">Quiz Completed!</h2>;
  }

  return (
    <div>
      <Progress current={currentQuestion + 1} total={questions.length} />
      <Question
        question={questions[currentQuestion]}
        selectedAnswer={selectedAnswer}
        onSelect={setSelectedAnswer}
      />
      {!selectedAnswer && <p className="hint">Please select an answer.</p>}
      <button onClick={handleNext} disabled={!selectedAnswer}>
        {isLastQuestion ? 'Finish Quiz' : 'Next'}
      </button>
    </div>
  );
}

export default Quiz;
