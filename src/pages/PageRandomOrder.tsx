import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { Flashcard } from '../components/Flashcard';

export const PageRandomOrder = () => {
	const { flashcards } = useContext(AppContext);

	return (
		<div className="page pageRandomOrder">
			{flashcards.map(flashcard => {
				return (
					<Flashcard key={flashcard.id} flashcard={flashcard} />
				)
			})}
		</div>
	);
};