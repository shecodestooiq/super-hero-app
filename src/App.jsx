
import { useEffect, useState } from 'react';
import Home from './pages/Home';

function App() {
  const [superHero, setSuperHero] = useState({});
  useEffect(() => {
    fetch('https://superheroapi.com/api.php/10160086797479102/226')
      .then((response) => response.json())
      .then((jsonData) => {
        setSuperHero(jsonData);
      });
    console.log(superHero);
  }, []);
  return (
    <>
      <Home superHero={superHero} />
      
    </>
  );
}

export default App;
