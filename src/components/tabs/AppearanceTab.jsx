import React, { useState, useEffect } from "react";
import getAppearance from "../../getters/appearance";
import { BASE_URL } from "../../urls";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function AppearanceTab() {
  const [appearance, setAppearance] = useState(null);

  const keysToDisplay = [
    "gender",
    "race",
    "height",
    "weight",
    "eye-color",
    "hair-color",
  ];

  useEffect(() => {
    getAppearance(`${BASE_URL}/1/appearance`, setAppearance);
  }, []);

  return (
    <>
      {appearance && (
        <div className="appearance-container">
          {Object.keys(appearance)
            .filter((key) => keysToDisplay.includes(key))
            .map((key) => (
              <div className="appearance-item" key={key}>
                <div className="name-icon appearance">
                  <FontAwesomeIcon icon={faStar} />
                  <div>{key.toUpperCase()}</div>
                </div>
                <div className="appearance-value">{appearance[key]}</div>
              </div>
            ))}
        </div>
      )}
    </>
  );
}

export default AppearanceTab;
