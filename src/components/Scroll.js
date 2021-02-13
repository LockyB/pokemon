import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
	return (
		<div className="container">
			<div className="containerChild">
			{props.children}
			</div>
		</div>
	);
};

export default Scroll;