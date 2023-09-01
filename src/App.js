import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function App() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    axios
      .get("https://superheroapi.com/api/257605103806175/1")
      .then((response) => {
        setHeroes(response.data);
      });
  }, []);
  
  return (
    <>
      <h1>{heroes.name}</h1>
      <img src={heroes.image.url} />
    </>
  );
}

export default App;
