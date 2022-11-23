import React, { useContext, useEffect, useState } from 'react';
import Card from './shared/Card';
import StayContext from '../context/StayContext';

function Stays() {
	const { stays, setStays } = useContext(StayContext);
	useEffect(() => {}, [stays]);
	return (
		<>
			<div className="title">
				<h1>Stays in {stays[0].country}</h1>
				<span>{stays.length}+ stays</span>
			</div>
			<div className="stays">
				{stays.map((stay) => (
					<Card key={stay.id} stays={stay} />
				))}
				<Card stays={stays[0]} />
			</div>
		</>
	);
}

export default Stays;
