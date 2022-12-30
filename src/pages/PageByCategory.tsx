import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { Flashcard } from '../components/Flashcard';

export const PageByCategory = () => {
	const {
		categoryItems,
		currentCategoryItemIdCode,
		handleChangeCurrentCategoryItemIdCode,
		currentCategoryFlashcards
	} = useContext(AppContext);
	return (
		<div className="page pageByCategory">
			<select
				onChange={(e) =>
					handleChangeCurrentCategoryItemIdCode(e.target.value)
				}
				value={currentCategoryItemIdCode}
			>
				{categoryItems.map((categoryItem) => {
					return (
						<option
							key={categoryItem.categoryIdCode}
							value={categoryItem.categoryIdCode}
						>
							{categoryItem.categoryName} (
							{`${categoryItem.total} flashcard${
								categoryItem.total === 1 ? '' : 's'
							}`}
							)
						</option>
					);
				})}
			</select>

			{currentCategoryFlashcards.map(flashcard => {
				return (
					<Flashcard key={flashcard.id} flashcard={flashcard} />
				)
			})}
		</div>
	);
};
