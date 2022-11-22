import React, { useContext } from 'react';
import logo from '../assets/logo.svg';
import StayContext from '../context/StayContext';

function Header() {
	const { stays, setStays, filterLocation, filterGuests } =
		useContext(StayContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('hello');
		filterGuests(5);
	};

	return (
		<header>
			<img src={logo} alt="Logon" />
			<nav>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="location"
						id="location"
						placeholder="Add location"
					/>
					<input type="text" name="guest" id="guest" placeholder="Add guests" />
					<button type="submit">🔍</button>
				</form>
			</nav>
		</header>
	);
}

export default Header;
