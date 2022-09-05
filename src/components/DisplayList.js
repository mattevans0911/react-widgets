import React, { useState } from "react";
import { Link } from "react-router-dom";
import { listData } from "./listData";

function DisplayList() {
  const [index, setIndex] = useState(0);

  let measurement = listData[index];

  const handleNextClick = () => {
    if (index === listData.length - 1) {
      alert("You have reached the end of the list");
    } else {
      setIndex(index + 1);
    }
  };

  const handlePreviousClick = () => {
    if (index === 0) {
      alert("You are at the beginning of the list");
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className="list-wrapper">
      <h1 className="page-title">List of Measurements</h1>
      <div className="image">
        <img src={measurement.image_url} alt="image" />
      </div>
      <h1 className="list-name">{measurement.listName}</h1>
      <p className="list-description">{measurement.description}</p>
      <button className="next-button" onClick={handleNextClick}>
        Next
      </button>
      <button className="previous-button" onClick={handlePreviousClick}>
        Previous
      </button>
    </div>
  );
}

export default DisplayList;
