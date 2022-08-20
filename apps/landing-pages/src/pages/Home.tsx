import { getGroupedGames, IGame } from '@arcade/library-common';
import {
	ContentContainer,
	HeadlineSubsection,
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

function GamesGrid({ games }: { games: IGame[] }) {
	return (
		<CardBillboardGrid>
			{games.map(({ name, url, imgUri }) => (
				<CardBillboard
					key={`game_${name}`}
					slotBackground={
						<CardBillboardBackgroundImage imgUri={imgUri} />
					}>
					<CardBillboardHeadline tag='h4'>
						<CardBillboardCoverLink href={url}>
							{name}
						</CardBillboardCoverLink>
					</CardBillboardHeadline>
				</CardBillboard>
			))}
		</CardBillboardGrid>
	);
}

export function Home() {
	return (
		<main>
			<VisuallyHidden as='span'>homepage</VisuallyHidden>

			<VisuallyHidden as='h2'>Games</VisuallyHidden>

			<ContentContainer>
				<VerticallyPaddedContainer as='section' $spacing={200}>
					<HeadlineSubsection as='h3'>
						Single Player
					</HeadlineSubsection>
					<GamesGrid games={gamesSinglePlayer} />
				</VerticallyPaddedContainer>
			</ContentContainer>

			<ContentContainer>
				<VerticallyPaddedContainer as='section' $spacing={200}>
					<HeadlineSubsection as='h3'>Two Players</HeadlineSubsection>
					<GamesGrid games={gamesTwoPlayers} />
				</VerticallyPaddedContainer>
			</ContentContainer>

			<ContentContainer>
				<VerticallyPaddedContainer as='section' $spacing={200}>
					<HeadlineSubsection as='h3'>
						Multiple Players
					</HeadlineSubsection>
					<GamesGrid games={gamesMultiPlayers} />
				</VerticallyPaddedContainer>
			</ContentContainer>
		</main>
	);
}
