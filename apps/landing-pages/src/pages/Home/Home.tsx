import { useState } from 'react';

import {
	CardBillboard,
	CardBillboardBackgroundImage,
	CardBillboardCoverLink,
	CardBillboardHeadline,
	PageLayoutContainer,
	SiteFooter,
	VisuallyHidden,
} from '@arcade/library-components';

import * as S from './Home.styled';
import { Headline100 } from '@arcade/library-components/src/components/headlines';

const GAME_GROUPS = [
	{
		name: 'Single Player',
		games: [
			{
				imgUri: '/img/bg/original/purple-mountain-lake.webp',
				url: 'https://sudoku.absolutholz.de/',
				name: 'Sudoku',
			},
			{
				imgUri: '/img/bg/original/purple-flowers-sunset.webp',
				url: 'https://minesweeper.absolutholz.de/',
				name: 'Minesweeper',
			},
		],
	},
	{
		name: 'Two Players',
		games: [
			{
				imgUri: '/img/bg/original/green-hills.webp',
				url: '/tictactoe/',
				name: 'Tic Tac Toe',
			},
			{
				imgUri: '/img/bg/original/desert-river.webp',
				url: '/connect4/',
				name: 'Connect 4',
			},
			{
				imgUri: '/img/bg/original/dead-tree-prairie.webp',
				url: '/checkers/',
				name: 'Checkers',
			},
		],
	},
	{
		name: 'Multiple Players',
		games: [
			{
				imgUri: '/img/bg/original/autumn-trees.webp',
				url: 'https://memory.absolutholz.de/',
				name: 'Memory',
			},
			{
				imgUri: '/img/bg/original/bright-forest-stump.webp',
				url: 'https://uno.absolutholz.de/',
				name: 'Uno',
			},
			{
				imgUri: '/img/bg/original/autumn-river.webp',
				url: '/dotsandboxes/',
				name: 'Dots & Boxes',
			},
		],
	},
];

export function Home() {
	const [gameGroups] = useState(GAME_GROUPS);

	return (
		<>
			<main>
				<PageLayoutContainer>
					<nav>
						<VisuallyHidden as='h2'>Games</VisuallyHidden>

						{gameGroups.map(({ name, games }) => (
							<S.Section key={`game-group_${name}`}>
								<Headline100 as='h3'>{name}</Headline100>

								<S.CardGrid>
									{games &&
										games.map(({ name, url, imgUri }) => (
											<CardBillboard
												key={`game_${name}`}
												slotBackground={
													<CardBillboardBackgroundImage
														imgUri={imgUri}
													/>
												}>
												<CardBillboardHeadline tag='h4'>
													<CardBillboardCoverLink
														href={url}>
														{name}
													</CardBillboardCoverLink>
												</CardBillboardHeadline>
											</CardBillboard>
										))}
								</S.CardGrid>
							</S.Section>
						))}
					</nav>
				</PageLayoutContainer>
			</main>
			<SiteFooter />
		</>
	);
}
