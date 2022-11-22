import React from 'react';

function Card({ stays }) {
	return (
		<div className="card">
			<img src={stays.photo} alt="Listing Image" />
			<div className="card-text">
				{/* {stays.superHost && {<div>SuperHost</div>}} */}
				{stays.superHost && <button className="superhost">SuperHost</button>}
				<span className="card-type">
					{stays.type} {`. ${stays.beds != null && stays.beds} beds`}
				</span>
				<span>⭐{stays.rating}</span>
			</div>
			<p>{stays.title}</p>
		</div>
	);
}

export default Card;
