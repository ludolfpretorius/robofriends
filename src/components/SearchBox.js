import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchChange}) => {
	return (
		<div className="pa2">
			<input
				className="pa3 ba b--green bg-white br2 bn"
				type="search"
				placeholder="search robots" 
				onChange={searchChange}
			/>
		</div>
	)
}

export default SearchBox;