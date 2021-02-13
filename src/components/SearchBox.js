import React from 'react';

const SearchBox = ({ searchChange }) => {
	return(
		<div className='pa2 w-100'>
				<input 
					className='pa3 ba b-grey bg-lightest-blue w-50 tc'
					type='search' 
					placeholder='search pokemon' 
					onChange={searchChange}
				/>
		</div>
	);
}

export default SearchBox;