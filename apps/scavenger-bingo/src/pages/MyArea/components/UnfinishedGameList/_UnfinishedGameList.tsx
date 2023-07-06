import { Button } from '@arcade/library-components/src/components/Button';
import { Stack } from '@arcade/library-components/src/components/Stack';
import { Typography } from '@arcade/library-components/src/components/Typography';

import * as S from './_UnfinishedGameList.styled';
import { useUnfinishedGames } from '../../../../hooks/useUnfinishedGames';
import { useEffect } from 'react';

export function UnfinishedGameList() {
	const {games, deleteGame} = useUnfinishedGames();

	function handleRemove(gameId: string) {
		deleteGame(gameId);
	}

	return (
		<>
			{games.length > 0 ? (
				<Stack shouldResetList spacingY='m' tag='ol'>
					{games.map(({ gameId, updatedOn }) => (
						<S.UnfinishedGameList_Row
							direction='row'
							key={`game_${gameId}`}
							spacingX='s'
							spacingY='xs'>
							<div>
								<time dateTime={updatedOn}>
									{new Date(updatedOn).toLocaleDateString()}
								</time>
								<Typography size='xs'>{gameId}</Typography>
							</div>
							<Stack
								direction='row'
								spacingX='s'
								>
								<Button to={`/game/${gameId}/`} text='Play' />
								<Button
									onClick={() => handleRemove(gameId)}
									text='Remove'
								/>
							</Stack>
						</S.UnfinishedGameList_Row>
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
