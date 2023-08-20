import React, { createContext, useState, useEffect } from "react";
import getImage from "../getters/image";
import getInfo from "../getters/info";
import getPowerstats from "../getters/powerstats";
import { BASE_URL } from "../urls";

const Context = createContext();

function DataProvider({ children }) {
  const [currentData, setCurrentData] = useState({
    image: "",
    info: null,
    powers: null,
  });

  useEffect(() => {
    getImage(`${BASE_URL}/70/image`, (imageData) => {
      setCurrentData((prevState) => ({ ...prevState, image: imageData }));
    });

    getInfo(`${BASE_URL}/70/powerstats`, (infoData) => {
      setCurrentData((prevState) => ({ ...prevState, info: infoData }));
    });

    getPowerstats(`${BASE_URL}/70/powerstats`, (powerData) => {
      setCurrentData((prevState) => ({ ...prevState, powers: powerData }));
    });
  }, []);
  // console.log(currentData);

  return (
    <Context.Provider value={{ currentData, setCurrentData }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
export { DataProvider };
