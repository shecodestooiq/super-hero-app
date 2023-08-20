import React, { useContext, useEffect, useState } from "react";
import getImage from "../getters/image";
import { BASE_URL } from "../urls";
import getInfo from "../getters/info";
import Tab from "./Tab";
import getPowerstats from "../getters/powerstats";
import PowersTab from "./tabs/PowersTab";
import BiographyTab from "./tabs/BiographyTab";
import AppearanceTab from "./tabs/AppearanceTab";
import ConnectionTab from "./tabs/ConnectionTab";
import Context from '../providers/dataProvider';


function Content() {

  const { currentData, setCurrentData } = useContext(Context)
  

  const [image, setImage] = useState("");
  const [info, setInfo] = useState(null);
  const [powers, setPower] = useState(null);
  const [currentTab, setCurrentTab] = useState("powerstats");

  useEffect(() => {
    getInfo(`${BASE_URL}/70/powerstats`, setInfo);
    getPowerstats(`${BASE_URL}/70/powerstats`, setPower);
  }, []);

  const handleTabSelect = (tab) => setCurrentTab(tab);


  const generateTabContent = (tab) => {
    switch (tab) {
      case "powerstats":
        return <PowersTab powers={powers} />;
      case "biography":
        return <BiographyTab />;
      case "appearance":
        return <AppearanceTab />;
      case "connections":
        return <ConnectionTab />;
      default:
        return null;
    }
  };

  return (
    <div className="content">
      {currentData && (
         <img src={currentData.image} alt="" />
      )}
      <div className="info">
        {info && (
          <>
            <h1>{info.name.toUpperCase()}</h1>
            <Tab onSelectTab={handleTabSelect}  />
            {generateTabContent(currentTab)}
          </>
        )}
      </div>
    </div>
  );
}

export default Content;
