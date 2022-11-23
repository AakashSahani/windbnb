import { createContext, useState } from 'react';
import stayData from '../data/stays';

const StayContext = createContext();

export const StayProvider = ({ children }) => {
	const [stays, setStays] = useState(stayData);
	const [adultCount, setAdultCount] = useState(0);
	const [childrenCount, setChildrenCount] = useState(0);

	const filterLocation = (city) => {
		stays.filter((stay) => stay.city === city);
	};
	const filterGuests = (guests) => {
		stays.filter((stay) => stay.maxGuests > guests);
	};
	return (
		<StayContext.Provider
			value={{
				stays,
				adultCount,
				setAdultCount,
				childrenCount,
				setChildrenCount,
				setStays,
				filterLocation,
				filterGuests,
			}}
		>
			{children}
		</StayContext.Provider>
	);
};

export default StayContext;
