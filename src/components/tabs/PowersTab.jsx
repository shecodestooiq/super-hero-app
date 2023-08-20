import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import Context from "../../providers/dataProvider";

function PowersTab() {
  const { currentData } = useContext(Context);

  const keysToDisplay = [
    "intelligence",
    "strength",
    "speed",
    "durability",
    "power",
  ];

  return (
    <>
      {currentData.powers && (
        <div className="power-container">
          {Object.keys(currentData.powers)
            .filter((key) => keysToDisplay.includes(key))
            .map((key) => (
              <div className="power-item" key={key}>
                <div className="name-icon">
                  <FontAwesomeIcon icon={faShieldHalved} />
                  <div>{key.toUpperCase()}</div>
                </div>

                <div className="power-num">{currentData.powers[key]}</div>
              </div>
            ))}
        </div>
      )}
    </>
  );
}

export default PowersTab;
