import React from "react";
import "./Home.css"

function Home({ superHero }) {
  console.log(superHero);
  return (
    <div className="center">
      <div
        className="home">
        <h1
          className="h1">{superHero.name}</h1>
        <p
          className="Title">
          Occupation :<br></br>
        </p>
        <span
          className="paragraph">
          {superHero.work &&
            superHero.work.occupation}
        </span>
        <p
          className="title">
          Group
        </p>
        <span
          className="paragraph">
          {superHero.connection &&
            superHero.connection[
            "group-affiliation"
            ]}
        </span>
        <div>

      {superHero.image && (
        <img className="img"
          src={superHero.image.url}
          alt={superHero.name}
        />
      )}

    </div>
    </div >
      </div >
  );
}
  

  

 

export default Home;
