import React from "react";
import { useEffect, useState } from "react";

function SuperHero() {
  const [superhero, setSuperhero] = useState([]);

  const fetchData = () => {
    fetch(`https://superheroapi.com/api.php/3618541118435018/${34}`)
      .then((response) => response.json())
      .then((data) => setSuperhero(data));
  };
  console.log(superhero);

  useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(superhero).length > 0 ? (
    <div className="heroContainer">
      <img src={superhero.image.url} alt="" />
      <div className="infoContainer">
        <h1>
          <span>{superhero.name}</span> Superhero
        </h1>
        <div className="headingContainer">
          <h2>Combat:</h2>
          <h2 className="numbers">{superhero.powerstats.combat}</h2>
        </div>
        <div className="headingContainer">
          <h2>Intelligence</h2>
          <h2 className="numbers">{superhero.powerstats.intelligence}</h2>
        </div>
        <div className="headingContainer">
          <h2>Gender:</h2>
          <h2 className="numbers">{superhero.appearance.gender}</h2>
        </div>
        <div className="headingContainer">
          <h2>Speed:</h2>
          <h2 className="numbers">{superhero.powerstats.speed}</h2>
        </div>
        <div className="headingContainer">
          <h2>Strength:</h2>
          <h2 className="numbers">{superhero.powerstats.strength}</h2>
        </div>
        <div className="headingContainer">
          <h2>Power:</h2>
          <h2 className="numbers">{superhero.powerstats.power}</h2>
        </div>
        <div className="headingContainer">
          <h2>Durability:</h2>
          <h2 className="numbers">{superhero.powerstats.durability}</h2>
        </div>
      </div>
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default SuperHero;
