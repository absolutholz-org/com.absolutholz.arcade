import { Button } from '@arcade/library-components/src/components/buttons/Button';
import { Stack } from '@arcade/library-components/src/components/Stack';
import { Typography } from '@arcade/library-components/src/components/Typography';

import * as S from './_GameList.styled';
import { useUnfinishedGames } from '../../hooks/useUnfinishedGames';

export function GameList() {
	const [games, , , removeGame] = useUnfinishedGames();

	function handleRemove(gameId: string) {
		removeGame(gameId);
	}

	return (
		<>
			{games.length > 0 ? (
				<Stack shouldResetList spaceLevelY='m' tag='ol'>
					{games.map(({ gameId, updatedOn }) => (
						<S.GameList_Row
							direction='row'
							key={`game_${gameId}`}
							spaceLevelX='s'
							spaceLevelY='xs'>
							<div>
								<time dateTime={updatedOn}>
									{new Date(updatedOn).toLocaleDateString()}
								</time>
								<Typography level={-1}>{gameId}</Typography>
							</div>
							<Stack
								direction='row'
								spaceLevelX='s'
								spaceLevelY='s'>
								<Button to={`/game/${gameId}`}>Play</Button>
								<Button onClick={() => handleRemove(gameId)}>
									Remove
								</Button>
							</Stack>
						</S.GameList_Row>
					))}
				</Stack>
			) : (
				<div>
					Looks like you don't have any unfinished games right now.
				</div>
			)}
		</>
	);
}
