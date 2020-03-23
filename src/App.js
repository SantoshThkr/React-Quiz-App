import React, { useState } from 'react';
import Quiz from './components/Quiz';

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="app">
      <div className="quiz">
        <h1>React Quiz</h1>
        {started ? (
          <Quiz />
        ) : (
          <div className="start">
            <p>Test your knowledge of JavaScript, React, HTML and CSS.</p>
            <button onClick={() => setStarted(true)}>Start Quiz</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
