import React from 'react';
import logo from '../assets/logo.svg';

function Header() {
	return (
		<header>
			<img src={logo} alt="Logon" />
			<nav>
				<form>
					<input
						type="text"
						name="location"
						id="location"
						placeholder="Add location"
					/>
					<input type="text" name="guest" id="guest" placeholder="Add guests" />
					<button type="submit">🔍 Search</button>
				</form>
			</nav>
		</header>
	);
}

export default Header;
