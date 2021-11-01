import React, { useEffect, useState } from "react";
import Card from "./Card";
function Timer({ timer }) {
  const durations = ["86400s", "3600s", "60s", "1s"];
  const [num, setNum] = useState();
  // useEffect(() => {})
  return (
    <div className="timer">
      {timer.map((unit, i) => (
        <div className="wrapper">
          <Card unit={unit} />
          <h4>{unit[1]}</h4>
        </div>
      ))}
    </div>
  );
}

export default Timer;
