import { getGame } from '@arcade/library-common';
import { Billboard, BillboardHeadline, ContentContainer, VerticallyPaddedContainer } from '@arcade/library-components';

import { PlayerPrompt } from '../components';
import { PlayerAvatar } from '../components/PlayerAvatar';
import { useGameConfiguration } from '../context/GameConfiguration';

const game = getGame('tictactoe');

export function Lobby() {
	const { gameSize } = useGameConfiguration();

	const { imgUri } = game!;
	const srcset = [400, 600, 800, 1200, 1600]
		.map((size) => `${import.meta.env.VITE_IMAGE_DOMAIN}${imgUri.replace('/original/', `/${size}/`)} ${size}w `)
		.join(',');

	return (
		<main>
			<Billboard slotBackground={<img aria-hidden={true} src={game?.imgUri} srcSet={srcset} />}>
				<BillboardHeadline>{game?.name}</BillboardHeadline>
			</Billboard>

			<ContentContainer>
				<VerticallyPaddedContainer spacing={200}>
					<PlayerPrompt showLogin={true} />
					<PlayerPrompt />

					<PlayerAvatar playerName='Wroni-lou wood' />

					{gameSize}
				</VerticallyPaddedContainer>
			</ContentContainer>
		</main>
	);
}
