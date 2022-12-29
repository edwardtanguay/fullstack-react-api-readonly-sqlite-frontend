import { useState, useEffect } from 'react';
import { createContext } from 'react';
import axios from 'axios';
import { IFlashcard } from './interfaces';

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
			setFlashcards((await axios.get(`${backendUrl}/flashcards`)).data);
		})();
	}, []);

	return (
		<AppContext.Provider
			value={{
				flashcards
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
