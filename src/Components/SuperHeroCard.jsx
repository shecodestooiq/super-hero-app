import React from "react";
import "./SuperHeroCard.css";

function SuperHeroCard({ superHero }) {
	console.log(superHero);
	return (
		<div className='Center'>
			<div className='SuperHeroCard'>
				<h1 className='H1'>{superHero.name}</h1>

				<p className='Title'>
					Occupation : <br></br>
				</p>

				<span className='Paragraph'>
					{superHero.work &&
						superHero.work.occupation}
				</span>

				<p className='Title'>
					Group Affiliation : <br></br>
				</p>

				<span className='Paragraph'>
					{superHero.connections &&
						superHero.connections[
							"group-affiliation"
						]}
				</span>
				<div>
					{superHero.image && (
						<img
							className='img'
							src={superHero.image.url}
							alt={superHero.name}
						/>
					)}
				</div>
			</div>
		</div>
	);
}

export default SuperHeroCard;
