import React from 'react';

const Card = ({id, name, height, weight, experience}) => {
	return(
		<div className = "tc dib bg-light-blue br3 pa2 ma2 grow bw2 shadow-5 link hover-bg-light-green">
			<img width="200rem"  alt={`pokemon ${id} : ${name}`} src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} />
			<div className = "tc">
				<h3 className = "f3 ma1 tc">{name}</h3>
				<p className = "ma1 tr">height: {height}</p>
				<p className = "ma1 tr">weight: {weight}</p>
				<p className = "ma1 tr">experience: {experience}</p>
			</div>
		</div>
	)
}

export default Card;
// <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />