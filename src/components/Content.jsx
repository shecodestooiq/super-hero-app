import React, { useContext, useState } from "react";
import Tab from "./Tab";
import PowersTab from "./tabs/PowersTab";
import BiographyTab from "./tabs/BiographyTab";
import AppearanceTab from "./tabs/AppearanceTab";
import ConnectionTab from "./tabs/ConnectionTab";
import Context from "../providers/dataProvider";


function Content() {
  const { currentData, setCurrentData } = useContext(Context);

  const [currentTab, setCurrentTab] = useState("powerstats");

  const handleTabSelect = (tab) => setCurrentTab(tab);


  const generateTabContent = (tab) => {
    switch (tab) {
      case "powerstats":
        return <PowersTab />;
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
      {currentData && <img src={currentData.image} alt="" />}
      <div className="info">
        {currentData && (
          <>
            {currentData.info && <h1>{currentData.info.name.toUpperCase()}</h1>}
            <Tab onSelectTab={handleTabSelect} />
            {generateTabContent(currentTab)}
          </>
        )}
      </div>
    </div>
  );
}

export default Content;
