import Header from './components/Header';
import Stays from './components/Stays';
import { StayProvider } from './context/StayContext';

function App() {
	return (
		<StayProvider>
			<Header />
			<Stays />
		</StayProvider>
	);
}

export default App;
