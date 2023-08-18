import React, { useState, useEffect } from "react";
import getConnections from "../../getters/connections";
import { BASE_URL } from "../../urls";

function ConnectionTab() {
  const [connection, setConnection] = useState(null);

  useEffect(() => {
    getConnections(`${BASE_URL}/70/connections`, setConnection);
  }, []);

  const keysToDisplay = ["relatives", "group-affiliation"];

  const shortenText = (str) => {
    return str ? str.split(",").slice(0, 2).join(", ") : "";
  };

  return (
    <>
      {connection && (
        <div className="connection-container">
          {Object.keys(connection)
            .filter((key) => keysToDisplay.includes(key.toLocaleLowerCase()))
            .map((key) => (
              <div className="connection-item">
                <div>--{key.toUpperCase()}</div>
                {shortenText(connection[key])}
              </div>
            ))}
        </div>
      )}
    </>
  );
}

export default ConnectionTab;
