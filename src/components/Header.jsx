import React, { useContext, useState } from 'react';
import logo from '../assets/logo.svg';
import StayContext from '../context/StayContext';
import Dropdown from './Dropdown';
import Guest from './Guest';

function Header() {
	const [open, setOpen] = useState(false);
	const { adultCount, childrenCount, filterGuests } = useContext(StayContext);

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<header className="active">
			<img src={logo} alt="Logon" />
			<nav>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="location"
						id="location"
						placeholder="Add location"
						value=""
						onClick={() => setOpen(!open)}
					/>
					<input
						type="text"
						name="guest"
						id="guest"
						placeholder="Add guests"
						onClick={() => setOpen(!open)}
					/>
					<button type="submit">🔍</button>
				</form>
			</nav>
			{open && (
				<div className="dropdown">
					<div className="dropdown-container">
						<Dropdown />
					</div>
					<Guest />
				</div>
			)}
		</header>
	);
}

export default Header;
