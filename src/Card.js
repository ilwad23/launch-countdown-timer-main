import React, { useEffect, useState } from "react";

function Card({ unit }) {
  return (
    <div className="wrapper">
      <div className="card">
        <div className="fliper animate"></div>
        <h3 className="num">{unit[0]}</h3>
        <img className="seperator" src="./images/seperator.svg" />
      </div>
      <h4>{unit[1]}</h4>
    </div>
  );
}

export default Card;
