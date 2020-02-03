import React from 'react';

const Card = ({name, email, id}) => {
	return (
		<div className="tc bg-white dib pa3 ma2 grow br3 bw shadow-5">
			<img src={`https://robohash.org/${id}?200x200`} alt="robot"></img>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	)
}

export default Card;