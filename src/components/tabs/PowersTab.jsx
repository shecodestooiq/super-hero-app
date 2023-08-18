import React , {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";

function PowersTab({powers}) {

  const keysToDisplay = [
    "intelligence",
    "strength",
    "speed",
    "durability",
    "power",
  ];
  return (
    <>
      {powers && (
        <div className="power-container">
          {Object.keys(powers)
            .filter((key) => keysToDisplay.includes(key))
            .map((key) => (
              <div className="power-item" key={key}>
                <div className="name-icon">
                  <FontAwesomeIcon
                    icon={faShieldHalved}
                    // color="red"
                    // style={{ color: "red !important" }}
                  />
                  <div>{key.toUpperCase()}</div>
                </div>

                <div className="power-num">{powers[key]}</div>
              </div>
            ))}
        </div>
      )}
    </>
  );
}

export default PowersTab;
