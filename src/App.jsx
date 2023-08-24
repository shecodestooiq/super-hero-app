import React, { useState, useEffect } from "react";
import './index.css';

function App() {
  const [name, setName] = useState("");
  const [superHero, setSuperHero] = useState({});

  const fetchData = () => {
    // Using the fetch function to make a GET request to the Superhero API
    fetch(`https://www.superheroapi.com/api.php/992414515411745/search/${name}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.results && data.results.length > 0) {
          setSuperHero(data.results[0]); // Update superHero state with the fetched data
        }
      });
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  useEffect(() => {
    // Fetch data when the component mounts or 'name' changes
    if (name !== "") {
      fetchData();
    }
  }, [name]);

  return (
    <div className="app">
      <h1>Super Hero App</h1>
      <input className="input" type="text" placeholder="enter name" onChange={handleChange} />
      <button className="btn" onClick={fetchData}>show info</button>
      <div>
        {/* Display the fetched superhero information */}
        <div className="info">
          <h2>{superHero.name}</h2>
          <p>Full Name: {superHero.biography?.["full-name"]}</p>
          <p>Alter Ego: {superHero.biography?.["alter-egos"]}</p>
          <p>Aliases: {superHero.biography?.["aliases"]}</p>
          <p>Place of Birth: {superHero.biography?.["place-of-birth"]}</p>
          <p>First Appearance: {superHero.biography?.["first-appearance"]}</p>
          <p>Publisher: {superHero.biography?.["publisher"]}</p>
          <p>Alignment: {superHero.biography?.["alignment"]}</p>
        </div>
       
      </div>
    </div>
  );
}

export default App;
