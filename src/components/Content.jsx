import React, { useEffect, useState } from "react";
import getImage from "../getters/image";
import { BASE_URL } from "../urls";
import getInfo from "../getters/info";
import Tab from "./Tab";
import getPowerstats from "../getters/powerstats";
import PowersTab from "./tabs/PowersTab";
import BiographyTab from "./tabs/BiographyTab";
import AppearanceTab from "./tabs/AppearanceTab";
import ConnectionTab from "./tabs/ConnectionTab";


function Content() {
  const [image, setImage] = useState("");
  const [info, setInfo] = useState(null);
  const [powers, setPower] = useState(null);
  const [currentTab, setCurrentTab] = useState("powerstats");

  useEffect(() => {
    getImage(`${BASE_URL}/70/image`, setImage); // Initial ID
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
      <img src={image} alt="" />
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
