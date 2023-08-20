import React from "react";
import Search from "./Search";
import Content from "./Content";
import Context, { DataProvider } from "../providers/dataProvider";

function Wrapper() {
  return (
    // The wrapper is the gradient background
    <div className="wrapper">
      {/* The black div at the center*/}
      <div className="main-div">
        {/* Title & Search line */}
        <div className="first-section">
          <div class="title">
            <h2>
              Super<strong>Hero.</strong>
            </h2>
          </div>
          <Search />
        </div>
        {/* <DataProvider> */}
          <Content />
        {/* </DataProvider> */}
      </div>
    </div>
  );
}

export default Wrapper;
