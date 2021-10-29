import React, { useEffect, useState } from "react";
import "./styles/styles.css";
import Timer from "./Timer";
import Footer from "./Footer";

function App() {
  const [timer, setTimer] = useState(["00", "00", "00", "00"]);
  const [startDate] = useState(() => {
    if (!localStorage.getItem("startDate")) {
      localStorage.setItem("startDate", Date());
    }
    return localStorage.getItem("startDate");
  });
  const [currentDate] = useState(() => {
    if (!localStorage.getItem("currentDate")) {
      return new Date(localStorage.getItem("startDate"));
    }
    let orgDate = new Date(startDate);
    let newDate = new Date()
    newDate.setMilliseconds(orgDate.getMilliseconds())
    return newDate;
  });

  const [countDown, setCountDown] = useState(() => {
    const goalDate = new Date(startDate);
    goalDate.setDate(goalDate.getDate() + 9);
    let countDown = (goalDate.getTime() - currentDate.getTime()) / 1000 - 3600;
    return countDown;
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
    localStorage.setItem("currentDate", new Date());
  }, [countDown]);

  function convertSecs(seconds, n) {
    const converted = seconds && Math.floor(seconds / n);
    seconds -= converted * n;
    return [converted, seconds];
  }

  function SecsToDitialTime(seconds) {
    let res = [
      [86400, "days"],
      [3600, "hours"],
      [60, "minutes"],
    ].reduce((time, v) => {
      let unit = convertSecs(seconds, v[0])[0];
      seconds = convertSecs(seconds, v[0])[1];
      if (unit < 10) unit = `0${unit}`;
      return [...time, [unit, v[1]]];
    }, []);
    if (seconds < 10) seconds = `0${seconds}`;
    res.push([seconds, "seconds"]);
    return res;
  }

  return (
    <div className="app">
      <h3 className="text">WE’RE LAUNCHING SOON</h3>
      <img className="bg" src="./images/bg-stars.svg" />
      <Timer timer={timer} />
      <Footer />
    </div>
  );

}

export default App;
