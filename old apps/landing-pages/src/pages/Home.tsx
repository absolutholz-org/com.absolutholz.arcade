import { getGroupedGames, IGame } from '@arcade/library-common';
import {
	Billboard,
	BillboardHeadline,
	ContentContainer,
	HeadlineSubsection,
	LogoText,
	VerticallyPaddedContainer,
	VisuallyHidden,
} from '@arcade/library-components';

import {
	CardBillboard,
	CardBillboardBackgroundImage,
	CardBillboardCoverLink,
	CardBillboardGrid,
	CardBillboardHeadline,
} from '../components/CardBillboard';

const gameGroups = getGroupedGames();
const gamesSinglePlayer = gameGroups['single'];
const gamesTwoPlayers = gameGroups['two'];
const gamesMultiPlayers = gameGroups['multi'];

function GamesGrid({ games }: { games: IGame[] }): JSX.Element {
	return (
		<CardBillboardGrid>
			{games.map(({ name, url, imgUri }) => (
				<CardBillboard key={`game_${name}`} slotBackground={<CardBillboardBackgroundImage imgUri={imgUri} />}>
					<CardBillboardHeadline tag='h4'>
						<CardBillboardCoverLink href={url}>{name}</CardBillboardCoverLink>
					</CardBillboardHeadline>
				</CardBillboard>
			))}
		</CardBillboardGrid>
	);
}

function GameSection({ headline, games }: { headline: string; games: IGame[] }): JSX.Element {
	return (
		<ContentContainer>
			<VerticallyPaddedContainer
				omit='bottom'
				tag='section'
				spacing={300}
				slotHeader={<HeadlineSubsection as='h3'>{headline}</HeadlineSubsection>}>
				<GamesGrid games={games} />
			</VerticallyPaddedContainer>
		</ContentContainer>
	);
}

export function Home() {
	return (
		<main>
			<Billboard>
				<BillboardHeadline>
					<LogoText />
				</BillboardHeadline>
			</Billboard>

			<VisuallyHidden as='h2'>Games</VisuallyHidden>

			<GameSection headline='Single Player' games={gamesSinglePlayer} />

			<GameSection headline='Two Players' games={gamesTwoPlayers} />

			<GameSection headline='Multiple Players' games={gamesMultiPlayers} />
		</main>
	);
}
