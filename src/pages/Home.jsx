import React, { useEffect, useState } from 'react'
import HeroCard from '../components/HeroCard';

export default function Home() {

    const [heros,setHeros] = useState([]);
    useEffect(()=>{
        const fetchHeros = async () => {
            const response = await fetch(
              "https://superheroapi.com/api/3553990661525460/search/flash"
            );
            const jsonData = await response.json();
            setHeros(jsonData.results); // assuming that the data is an array of heroes
          };
          fetchHeros();
        }, []);
  return (
    <div className='heros'>
      <h1>Heros</h1>
      {Array.isArray(heros) &&
        heros.map((hero) => (
          <HeroCard id={hero.name} name={hero.name} img={hero.image.url} biography={hero.biography["full-name"]}/>
        ))}
    </div>
  )
}
