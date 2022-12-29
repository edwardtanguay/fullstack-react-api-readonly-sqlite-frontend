import './App.scss';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { PageRandomOrder } from './pages/PageRandomOrder';
import { PageByCategory } from './pages/PageByCategory';

function App() {
	return (
		<div className="App">
			<h1>Flashcards</h1>
			<nav>
				<NavLink to="/randomOrder">Random Order</NavLink>
				<NavLink to="/byCategory">By Category</NavLink>
			</nav>

			<Routes>
				<Route path="/randomOrder" element={<PageRandomOrder />} />
				<Route path="/byCategory" element={<PageByCategory />} />
				<Route path="/" element={<Navigate to="/randomOrder" replace />} />
			</Routes>
		</div>
	);
}

export default App;
