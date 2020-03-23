import React from 'react';

function Progress({ current, total }) {
  return (
    <div className="progress">
      <p>
        Question {current} of {total}
      </p>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${(current / total) * 100}%` }} />
      </div>
    </div>
  );
}

export default Progress;
