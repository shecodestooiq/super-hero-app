import React, { useEffect, useState , useContext } from "react";
import Context from "../../providers/dataProvider";



function BiographyTab() {
  const { currentData } = useContext(Context);

  const keysToDisplay = [
    "full-name",
    "alert-egos",
    "aliases",
    "place-of-birth",
    "first-appearance",
    "publisher",
  ];


  return (
    <>
      {currentData && (
        <div className="biography-container">
          {Object.keys(currentData.biography)
            .filter((key) => keysToDisplay.includes(key.toLocaleLowerCase()))
            .map((key) => (
              <div className="biography-item" key={key}>
                <div className="key">{key.toUpperCase()} : </div>
                <div className="biography-value">{currentData.biography[key]}</div>
              </div>
            ))}
        </div>
      )}
    </>
  );
}

export default BiographyTab;
