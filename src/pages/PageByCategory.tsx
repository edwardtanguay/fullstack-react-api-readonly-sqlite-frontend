import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const PageByCategory = () => {
	const { categoryItems } = useContext(AppContext);
	return (
		<div className="page pageByCategory">
		<p>There are {categoryItems.length} categories.</p>
		</div>
	);
};