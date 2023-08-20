import React, { useState, useEffect, useContext } from "react";
import Context from "../../providers/dataProvider";

function ConnectionTab() {
  const { currentData } = useContext(Context);

  const keysToDisplay = ["relatives", "group-affiliation"];

  const shortenText = (str) => {
    if (str) {
      const delimiter = str.includes(",") ? "," : ";";
      return str
        .split(delimiter)
        .slice(0, 2)
        .join(delimiter + " ");
    }
    return "";
  };

  return (
    <>
      {currentData && (
        <div className="connection-container">
          {Object.keys(currentData.connections)
            .filter((key) => keysToDisplay.includes(key.toLocaleLowerCase()))
            .map((key) => (
              <div className="connection-item">
                <div className="yellow-and-text">
                  <div className="bold-yellow">-</div>
                  <div>{key.toUpperCase()}</div>
                </div>
                {shortenText(currentData.connections[key])}
              </div>
            ))}
        </div>
      )}
    </>
  );
}

export default ConnectionTab;
