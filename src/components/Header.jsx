import React, { useContext } from 'react';
import logo from '../assets/logo.svg';
import StayContext from '../context/StayContext';

function Header() {
	const { stays, setStays } = useContext(StayContext);

	const handleClick = () => {
		console.log('hello');
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('hello');
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
					<input
						type="text"
						name="guest"
						id="guest"
						placeholder="Add guests"
						onChange={handleChange}
					/>
					<button type="submit">🔍</button>
				</form>
			</nav>
		</header>
	);
}

export default Header;
