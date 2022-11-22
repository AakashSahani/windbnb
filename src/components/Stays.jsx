import React, { useState } from 'react';
import Card from './shared/Card';
import stayData from '../data/stays';

function Stays() {
	const [stays, setStays] = useState(stayData);
	return (
		<div className="stays">
			{stays.map((stay) => (
				<Card key={stay} stays={stay} />
			))}
			<Card stays={stays[0]} />
		</div>
	);
}

export default Stays;
