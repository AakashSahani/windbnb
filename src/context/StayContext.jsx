import { createContext, useState } from 'react';
import stayData from '../data/stays';

const StayContext = createContext();

export const StayProvider = ({ children }) => {
	const [stays, setStays] = useState(stayData);
	return (
		<StayContext.Provider value={{ stays, setStays }}>
			{children}
		</StayContext.Provider>
	);
};

export default StayContext;
