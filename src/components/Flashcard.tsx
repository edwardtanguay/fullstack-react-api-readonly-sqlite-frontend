import { IFlashcard } from '../interfaces';

interface IProps {
	flashcard: IFlashcard;
}

export const Flashcard = ({ flashcard }: IProps) => {
	return <div className="flashcard">
		<div className="front">{flashcard.categoryName.toUpperCase()}: {flashcard.front}</div>
		<div className="back">{flashcard.front}</div>
	</div>;
};
