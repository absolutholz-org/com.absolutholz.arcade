import { useNavigate } from 'react-router-dom';

import { useUnfinishedGames } from '../../hooks/useUnfinishedGames';
import { Dialog } from '@arcade/library-components/src/components/Dialog';
import { Typography } from '@arcade/library-components/src/components/Typography';
import { Stack } from '@arcade/library-components/src/components/Stack';
import { Button } from '@arcade/library-components/src/components/Button';

export function UnfinishedGameNotifier() {
	const {games} = useUnfinishedGames();
	const navigate = useNavigate();

	function handleContinueGameClick() {
		if (games.length === 1) {
			navigate(`/game/${games[0].gameId}`);
		} else {
			navigate(`/games`);
		}
	}

	return (
		<Dialog shouldShow={games.length > 0} onClose={() => {}}>
			<Stack direction='column' >
				<Typography size='m'>
					You have unfinished games. Would you like to start a new one
					or continue playing?
				</Typography>
				<Stack direction='row' spacingX='m' >
					<Button to='/lobby' text='New Game' />
					<Button
						onClick={handleContinueGameClick}
						text='Continue Game'
					/>
				</Stack>
			</Stack>
		</Dialog>
	);
}
