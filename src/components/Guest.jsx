import { useContext } from 'react';
import StayContext from '../context/StayContext';

function Guest() {
	const { adultCount, setAdultCount, childrenCount, setChildrenCount } =
		useContext(StayContext);

	return (
		<div className="guest">
			<div>
				<p>Adults</p>
				<span>Ages 13 or above</span>
				<div className="count">
					<button onClick={() => setAdultCount(adultCount + 1)}>➕</button>
					<span>{adultCount}</span>
					<button onClick={() => setAdultCount(adultCount - 1)}>➖</button>
				</div>
			</div>
			<div>
				<p>Children</p>
				<span>Ages 2-12</span>
				<div className="count">
					<button onClick={() => setChildrenCount(childrenCount + 1)}>
						➕
					</button>
					<span>{childrenCount}</span>
					<button onClick={() => setChildrenCount(childrenCount - 1)}>
						➖
					</button>
				</div>
			</div>
		</div>
	);
}

export default Guest;
