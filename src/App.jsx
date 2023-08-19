import { useEffect, useState } from "react";
import './App.css'
function App() {
  const [data, setData] = useState({});
  const [load, setLoad] = useState(false);
  useEffect(() => {
    fetch("https://superheroapi.com/api.php/2777552382386863/414")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoad(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  console.log(data);
  return (
    <>
      {load
        ? data && (
            <div className="hero">
              <img src={data?.image?.url} style={{width:"350px",height:"400px"}}/>
              <div className="bio"> <h1>the {data?.appearance?.race} super hero {data.name}</h1>
              <div className="spans">
                <span>intelligence {data?.powerstats?.intelligence} </span>
                <span>strength {data?.powerstats?.strength} </span>
                <span>durability {data?.powerstats?.durability} </span>
                <span>power {data?.powerstats?.power}</span>

              </div>
              <br/>
             <p>also known as<br/><span>{data?.biography?.aliases.map((a)=>{return ` ${a}, `})}</span> </p>
             <p> was born in {data?.biography["place-of-birth"]}</p>
             <p>relatives <br/>{data?.connections?.relatives}</p> 
             <p> he is {data?.work?.occupation}</p>
            
             </div>
            </div>
          )
        : <h1 className="loading">loading...</h1>}
    </>
  );
}

export default App;
