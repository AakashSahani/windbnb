import { createContext, useState } from 'react';
import stayData from '../data/stays';

const StayContext = createContext();

export const StayProvider = ({ children }) => {
	const [stays, setStays] = useState(stayData);

	const filterLocation = (location) => {
		console.log(stays.filter((stay) => stay.location === location));
	};
	const filterGuests = (guests) => {
		console.log(stays.filter((stay) => stay.maxGuests > guests));
	};
	return (
		<StayContext.Provider
			value={{ stays, setStays, filterLocation, filterGuests }}
		>
			{children}
		</StayContext.Provider>
	);
};

export default StayContext;
