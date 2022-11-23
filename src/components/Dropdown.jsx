import React, { useContext, useEffect, useState } from 'react';
import StayContext from '../context/StayContext';

function Dropdown() {
	const { stays, filterLocation } = useContext(StayContext);
	const [location, setLocation] = useState([]);

	useEffect(() => {
		const newLocation = new Set();
		stays.map((stay) => newLocation.add(stay.city));
		const locationArr = [];
		newLocation.forEach((value) => locationArr.push(value));
		setLocation(locationArr);
	}, []);

	return (
		<>
			{location.map((loc, index) => (
				<div key={index} onClick={() => filterLocation(loc)} className="city">
					🎮 {loc}, {stays[0].country}
				</div>
			))}
		</>
	);
}

export default Dropdown;
