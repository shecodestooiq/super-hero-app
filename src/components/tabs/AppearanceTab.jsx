import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Context from "../../providers/dataProvider";


function AppearanceTab() {
  const { currentData } = useContext(Context);

  const keysToDisplay = [
    "gender",
    "race",
    "height",
    "weight",
    "eye-color",
    "hair-color",
  ];

  return (
    <>
      {currentData && (
        <div className="appearance-container">
          {Object.keys(currentData.appearance)
            .filter((key) => keysToDisplay.includes(key))
            .map((key) => (
              <div className="appearance-item" key={key}>
                <div className="name-icon appearance">
                  <FontAwesomeIcon icon={faStar} />
                  <div>{key.toUpperCase()}</div>
                </div>
                <div className="appearance-value">
                  {currentData.appearance[key]}
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
}

export default AppearanceTab;
