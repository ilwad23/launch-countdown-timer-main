import React, { useEffect, useState } from "react";
import Timer from "./Timer"
import "./App.css";

function App() {
  const [timer, setTimer] = useState(["00", "00", "00", "00"]);
  const [countDown, setCountDown] = useState(() => {
    const date = Date();
    const currentDate = new Date(date);
    const goalDate = new Date(date);
    goalDate.setDate(goalDate.getDate() + 9);
    let countDown = (goalDate.getTime() - currentDate.getTime()) / 1000 - 3600;
    return localStorage.getItem('countDown')|| countDown;
  });

  useEffect(() => {
    if (countDown > 0) {
      setInterval(() => {
        setCountDown((prevCountDown) => prevCountDown - 1);
      }, 1000);
    }
  }, []);
  useEffect(() => {
    setTimer(SecsToDitialTime(countDown));
    localStorage.setItem("countDown", countDown);
  }, [countDown]);

  function convertSecs(seconds, n) {
    const converted = seconds && Math.floor(seconds / n);
    seconds -= converted * n;
    return [converted, seconds];
  }
  function SecsToDitialTime(seconds) {
    let res = [86400, 3600, 60].reduce((time, v) => {
      let unit = convertSecs(seconds, v)[0];
      seconds = convertSecs(seconds, v)[1];
      if (unit < 10) unit = `0${unit}`;
      return [...time, unit];
    }, []);
    if (seconds < 10) seconds = `0${seconds}`;
    res.push(seconds);
    return res;
  }
  return (
    <div className="App">
      <Timer timer={timer} />
    </div>
  );
}

export default App;
