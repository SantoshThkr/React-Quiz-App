import React, { useState } from 'react';
import questions from '../data/questions';
import Progress from './Progress';
import Question from './Question';
import Result from './Result';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const isLastQuestion = currentQuestion === questions.length - 1;

  const handleNext = () => {
    if (!selectedAnswer) {
      return;
    }

    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (isLastQuestion) {
      setFinished(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer('');
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    return <Result score={score} total={questions.length} onRestart={handleRestart} />;
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
