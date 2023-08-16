import React, { useEffect, useState } from "react";
import getImage from "./getters/imageGetter";
import { BASE_URL } from "../urls";
import getInfo from "./getters/infoGetter";

function Contant() {
  const [image, setImage] = useState("");
  const [info, setInfo] = useState(null);

  useEffect(() => {
    getImage(`${BASE_URL}/70/image`, setImage);
    getInfo(`${BASE_URL}/70/powerstats`, setInfo);
  }, []);

  return (
    <div className="content">
      {/* <div className="img-container"> */}
      <img src={image} alt="" />
      {/* </div> */}
      <div className="info">
        {info && (
          <>
            <h1>{info.name.toUpperCase()}</h1>
            
          </>
        )}
      </div>
    </div>
  );
}

export default Contant;
