import React from "react";
import Separator from "./images/separator.svg";
function Card({ unit }) {
  return (
    <div className="card">
      <div className={`card__flipper ${true && "card__flip"}`}></div>
      <h3 className="num" onChange={() => console.log("work")}>
        {unit[0]}
      </h3>
      <img className="separator" src={Separator} alt="Separator" />
    </div>
  );
}

export default Card;
