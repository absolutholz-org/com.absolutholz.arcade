import {
	useState,
	createContext,
	ReactNode,
	useEffect,
	Dispatch,
	SetStateAction,
	useContext,
} from 'react';
import { UserContext } from '@arcade/library-common';

import { IDotsAndBoxesPlayer } from '../dataModels/IDotsAndBoxesPlayer';

interface IPlayersContext {
	player1: IDotsAndBoxesPlayer;
	player2: IDotsAndBoxesPlayer;
	setPlayer1: Dispatch<SetStateAction<IDotsAndBoxesPlayer>>;
	setPlayer2: Dispatch<SetStateAction<IDotsAndBoxesPlayer>>;
}

const defaultState = {
	player1: {
		color: '#f00',
		displayName: 'Player 1',
	},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	setPlayer1: () => {},
	player2: {
		color: '#00f',
		displayName: 'Player 2',
	},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	setPlayer2: () => {},
};

const STORAGE_KEY_PLAYER_1 = 'absolutholz.arcade:player1';
const STORAGE_KEY_PLAYER_2 = 'absolutholz.arcade:player2';

export const PlayersContext = createContext<IPlayersContext>(defaultState);

export function PlayersProvider({
	children,
}: {
	children: ReactNode;
}): JSX.Element {
	const [player1, setPlayer1] = useState<IDotsAndBoxesPlayer>(
		defaultState.player1
	);
	const [player2, setPlayer2] = useState<IDotsAndBoxesPlayer>(
		defaultState.player2
	);

	const { user } = useContext(UserContext);

	useEffect(() => {
		if (player1?.displayName) {
			sessionStorage.setItem(
				STORAGE_KEY_PLAYER_1,
				JSON.stringify(player1)
			);
		} else {
			// sessionStorage.removeItem(STORAGE_KEY_PLAYER_1);
		}
	}, [player1]);

	useEffect(() => {
		if (player2?.displayName) {
			sessionStorage.setItem(
				STORAGE_KEY_PLAYER_2,
				JSON.stringify(player2)
			);
		} else {
			// sessionStorage.removeItem(STORAGE_KEY_PLAYER_2);
		}
	}, [player2]);

	useEffect(() => {
		const player1Storage = sessionStorage.getItem(STORAGE_KEY_PLAYER_1);
		if (player1?.displayName === '' && player1Storage) {
			setPlayer1(JSON.parse(player1Storage));
		}

		const player2Storage = sessionStorage.getItem(STORAGE_KEY_PLAYER_2);
		if (player2?.displayName === '' && player2Storage) {
			setPlayer2(JSON.parse(player2Storage));
		}
	}, []);

	useEffect(() => {
		if (player1?.displayName === '' && user?.displayName) {
			const { displayName } = user;
			setPlayer1((player) => {
				return {
					...player,
					displayName,
				};
			});
		}
	}, [user]);

	return (
		<PlayersContext.Provider
			value={{ player1, player2, setPlayer1, setPlayer2 }}>
			{children}
		</PlayersContext.Provider>
	);
}
