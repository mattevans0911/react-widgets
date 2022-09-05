import React, { useState } from "react";

function Color() {
  const blue = "blue";
  const yellow = "yellow";

  const [color, setColor] = useState(blue);

  const handleColorChange = () => {
    if (color === blue) {
      setColor(yellow);
    } else {
      setColor(blue);
    }
  };

  return (
    <div className="color-wrapper">
      <div style={{ background: color }}>
        <h1 className="color-title">Check Out My Colors</h1>
        <div className="color-button-wrapper">
          <button className="color-button" onClick={handleColorChange}>
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Color;
