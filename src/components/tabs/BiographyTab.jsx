import React, { useEffect, useState } from "react";
import getBiography from "../../getters/biography";
import { BASE_URL } from "../../urls";

function BiographyTab() {
  const [biography, setBiography] = useState(null);

  const keysToDisplay = [
    "full-name",
    "alert-egos",
    "aliases",
    "place-of-birth",
    "first-appearance",
    "publisher",
  ];

  useEffect(() => {
    getBiography(`${BASE_URL}/1/biography`, setBiography);
  }, []);


  return (
    <>
      {biography && (
        <div className="biography-container">
          {Object.keys(biography)
            .filter((key) => keysToDisplay.includes(key.toLocaleLowerCase()))
            .map((key) => (
              <div className="biography-item" key={key}>
                <div className="key">{key.toUpperCase()} : </div>
                <div className="biography-value">{biography[key]}</div>
              </div>
            ))}
        </div>
      )}
    </>
  );
}

export default BiographyTab;
