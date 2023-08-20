import React, { useState } from "react";

function Tab({ onSelectTab }) {
  const tabs = ["powerstats", "biography", "appearance", "connections"];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    onSelectTab(tab);
  };

  return (
    <>
      <div className="tabs-line">
        {tabs.map((tab, index) => (
          <>
            <p
              key={index}
              className={tab === selectedTab ? "active" : ""}
              onClick={() => handleTabClick(tab)}
            >
              {tab.toUpperCase()}
            </p>
          </>
        ))}
      </div>
    </>
  );
}

export default Tab;
