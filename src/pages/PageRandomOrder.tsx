import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const PageRandomOrder = () => {
	const { flashcards } = useContext(AppContext);

	return (
		<div className="page pageRandomOrder">
			<p>There are {flashcards.length} flashcards.</p>
		</div>
	);
};