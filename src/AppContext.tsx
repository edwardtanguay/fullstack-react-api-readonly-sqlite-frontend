import { useState, useEffect } from 'react';
import { createContext } from 'react';
import axios from 'axios';
import { IFlashcard, IRawFlashcard } from './interfaces';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

interface IAppContext {
	flashcards: IFlashcard[];
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [flashcards, setFlashcards] = useState<IFlashcard[]>([]);

	useEffect(() => {
		(async () => {
			const rawFlashcards = (await axios.get(`${backendUrl}/flashcards`))
				.data;
			const _flashcards: IFlashcard[] = [];
			rawFlashcards.forEach((rawFlashcard: IRawFlashcard) => {
				const _flashcard: IFlashcard = {
					...rawFlashcard,
					isOpen: false,
				};
				_flashcards.push(_flashcard);
			});
			setFlashcards(_flashcards);
		})();
	}, []);

	return (
		<AppContext.Provider
			value={{
				flashcards,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
