import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUnfinishedGames } from '../../hooks/useUnfinishedGames';

export function UnfinishedGameNotifier() {
	const [games] = useUnfinishedGames();
	const navigate = useNavigate();

	useEffect(() => {
		if (games.length > 0) {
			const continuePlaying = confirm(
				'You have unfinished games. Would you like to continue playing?'
			);

			if (continuePlaying) {
				if (games.length === 1) {
					navigate(`/game/${games[0].gameId}`);
				} else {
					navigate(`/games`);
				}
			}
		}
	}, []);

	return <></>;
}
