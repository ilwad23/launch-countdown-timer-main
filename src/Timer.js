import React from "react";
import Card from "./Card";

function Timer({ timer }) {
  const durations = ["86400s", "3600s", "60s", "1s"];
  return (
    <div className="timer">
      {timer.map((unit, i) => (
        <Card unit={unit}/>
      ))}
    </div>
  );
}

export default Timer;
