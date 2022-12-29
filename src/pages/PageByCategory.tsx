import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const PageByCategory = () => {
	const { categoryItems, currentCategoryItemIdCode, handleChangeCurrentCategoryItemIdCode } = useContext(AppContext);
	return (
		<div className="page pageByCategory">
			<select onChange={(e) => handleChangeCurrentCategoryItemIdCode(e.target.value)}
				value={currentCategoryItemIdCode}	
			>
				{categoryItems.map((categoryItem) => {
					return (
						<option
							key={categoryItem.categoryIdCode}
							value={categoryItem.categoryIdCode}>{categoryItem.categoryName} ({`${categoryItem.total} flashcard${categoryItem.total === 1 ? '' : 's'}`})</option>
					)
				})}
			</select>

			{currentCategoryItemIdCode}

		</div>
	);
};