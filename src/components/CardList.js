import React from 'react'
import Card from './Card';


const CardList = ({pokemons}) => {
	return (
		<div className="flex flex-wrap justify-center items-center">
		{
			pokemons.map((info,i) => {
				return (
					<Card 
						key={pokemons[i].id} 
						id={pokemons[i].id}
						name={pokemons[i].name} 
						height={pokemons[i].height}
						weight={pokemons[i].weight}
						experience={pokemons[i].base_experience}
						/>
					)
			})
		}
		</div>
	)
}



export default CardList;