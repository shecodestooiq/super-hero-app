import React, { createContext, useState, useEffect } from "react";
import getImage from "../services/image";
import getPowerstats from "../services/powerstats";
import getInfo from "../services/info";
import { BASE_URL } from "../urls";
import getBiography from "../services/biography";
import getAppearance from "../services/appearance";


const Context = createContext();

function DataProvider({ children }) {
  const [currentData, setCurrentData] = useState({
    image: "",
    info: null,
    powers: null,
    connections: null,
    biography: null,
    appearance: null
  });

  useEffect(() => {
    getImage(`${BASE_URL}/70/image`, (imageData) => {
      setCurrentData((prevState) => ({ ...prevState, image: imageData }));
    });
    getInfo(`${BASE_URL}/70/info`, (infoData) => {
      setCurrentData((prevState) => ({ ...prevState, info: infoData }));
    });

    getPowerstats(`${BASE_URL}/70/powerstats`, (powerData) => {
      setCurrentData((prevState) => ({ ...prevState, powers: powerData }));
    });

    getPowerstats(`${BASE_URL}/70/connections`, (connectionsData) => {
      setCurrentData((prevState) => ({
        ...prevState,
        connections: connectionsData,
      }));
    });

    getBiography(`${BASE_URL}/70/biography`, (biographyData) => {
      setCurrentData((prevState) => ({
        ...prevState,
        biography: biographyData,
      }));
    });

    getAppearance(`${BASE_URL}/70/appearance`, (appearanceData) => {
      setCurrentData((prevState) => ({
        ...prevState,
        appearance: appearanceData,
      }));
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
