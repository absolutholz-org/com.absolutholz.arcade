import {
	CardBillboard,
	CardBillboardBackgroundImage,
	CardBillboardCoverLink,
	CardBillboardGrid,
	CardBillboardHeadline,
	Headline100,
	LogoTextInline,
	PageLayoutContainer,
	SectionPadded,
	SpacingSize,
	Theme,
	VisuallyHidden,
} from '@arcade/library-components';
import { getGroupedGames, IGame } from '@arcade/library-common';

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

			<PageLayoutContainer>
				<SectionPadded as='section' $spacing={SpacingSize.x300}>
					<Headline100 as='h3'>Single Player</Headline100>
					<GamesGrid games={gamesSinglePlayer} />
				</SectionPadded>
			</PageLayoutContainer>

			<PageLayoutContainer>
				<SectionPadded
					as='section'
					$spacing={SpacingSize.x300}
					$omit='top'>
					<Headline100 as='h3'>Two Players</Headline100>

					<GamesGrid games={gamesTwoPlayers} />
				</SectionPadded>
			</PageLayoutContainer>

			<PageLayoutContainer>
				<SectionPadded
					as='section'
					$spacing={SpacingSize.x300}
					$omit='top'>
					<Headline100 as='h3'>Multiple Players</Headline100>

					<GamesGrid games={gamesMultiPlayers} />
				</SectionPadded>
			</PageLayoutContainer>
		</main>
	);
}
