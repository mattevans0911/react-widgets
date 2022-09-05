import React, { useState } from "react";

function Counter() {
  const [count, setCounter] = useState(0);

  const handleUpClick = () => {
    setCounter(count + 1);
  };

  const handleDownClick = () => {
    setCounter(count - 1);
  };
  return (
    <div className="counter-wrapper">
      <h1 className="counter-title">Lets Count</h1>
      <div className="count">{count}</div>
      <div className="count-buttons">
        <button onClick={handleDownClick}>Go Down</button>
        <button onClick={handleUpClick}>Go Up</button>
      </div>
    </div>
  );
}

export default Counter;
