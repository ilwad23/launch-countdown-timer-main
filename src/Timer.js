import React from 'react'

function Timer({ timer }) {
  return (
    <div>
      <h1>
        {timer.map((unit) => (
          <span>{unit}|</span>
        ))}
      </h1>
    </div>
  );
}

export default Timer
