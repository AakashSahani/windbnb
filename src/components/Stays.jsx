import React, { useState } from 'react';
import Card from './shared/Card';
import stayData from '../data/stays';

function Stays() {
	const [stays, setStays] = useState(stayData);
	return (
		<>
			<div className="title">
				<h1>Stays in {stays[0].country}</h1>
				<span>{stays.length}+ stays</span>
			</div>
			<div className="stays">
				{stays.map((stay) => (
					<Card key={stay} stays={stay} />
				))}
				<Card stays={stays[0]} />
			</div>
		</>
	);
}

export default Stays;
