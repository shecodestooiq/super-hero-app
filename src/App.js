import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [superhero, setSuperhero] = useState({});
useEffect(()=>{ 
 fetch('https://superheroapi.com/api.php/266500779619820/332')
  .then((response) => response.json())
  .then((data) => {
    setSuperhero(data)
  })},[])
  return (
    <div className="container">
    <h1 className="superhero-name">{superhero.name}</h1>
    <p className="superhero-id">ID: {superhero.id}</p>
    <div className="superhero-image">
      <img src={superhero.image} alt={superhero.name} />
    </div>
    
    <div className="superhero-features">
      <h2>More Features</h2>
      <ul>
        <li><strong>Gender:</strong> {superhero.appearance.gender}</li>
        <li><strong>Alignment:</strong> {superhero.biography.alignment}</li>
        <li><strong>Occupation:</strong> {superhero.work.occupation}</li>
        <li><strong>Place of Birth:</strong> {superhero.biography.placeOfBirth}</li>
       
      </ul>
    </div>
  </div>
);
}

export default App;