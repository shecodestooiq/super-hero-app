import React, {
	useEffect,
	useState,
} from "react";
import SuperHeroCard from "./Components/SuperHeroCard";

function App() {
	const [superHero, setSuperHero] = useState({});

	useEffect(() => {
		fetch(
			`https://superheroapi.com/api.php/10160086797479102/226`
		)
			.then((response) => response.json())
			.then((jsonData) => {
				setSuperHero(jsonData);
			});
		console.log(superHero);
	}, []);

	return (
    <div>
      < SuperHeroCard superHero={superHero} />
		</div>
	);
}

export default App;
