import React from "react";
import Search from "./Search";
import Contant from "./Content";

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
        

        <Contant />

      </div>
    </div>
  );
}

export default Wrapper;
