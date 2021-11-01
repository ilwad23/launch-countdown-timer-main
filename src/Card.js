import React, { useEffect, useState } from "react";
function Card({unit}) {
  const [num, setNum] = useState();
  // useEffect(() => {})
  
  return (
    <div className="card">
      <div className={`flipper ${true && "flip"}`}></div>
      <h3 className="num" onChange={() => console.log('work')}>
        {unit[0]}
      </h3>
      <img className="seperator" src="./images/seperator.svg" />
    </div>
  );
}

export default Card;
