import { useState } from "react";

import {
	CardBillboard,
	CardBillboardCoverLink,
	CardBillboardHeadline,
	PageLayoutContainer,
	VisuallyHidden,
} from "@arcade/library-components";

import * as S from "./Home.styled";

const GAME_GROUPS = [
	{
		name: "Single Player",
		games: [
			{
				imgUri: "/img/bg/original/purple-mountain-lake.jpg",
				url: "/sudoku/",
				name: "Sudoku",
			},
			{
				imgUri: "/img/bg/original/purple-flowers-sunset.jpg",
				url: "/minesweeper/",
				name: "Minesweeper",
			},
		],
	},
	{
		name: "Two Players",
		games: [
			{
				imgUri: "/img/bg/original/green-hills.jpg",
				url: "/tictactoe/",
				name: "Tic Tac Toe",
			},
			{
				imgUri: "/img/bg/original/desert-river.jpg",
				url: "/connect4/",
				name: "Connect 4",
			},
			{
				imgUri: "/img/bg/original/dead-tree-prairie.jpg",
				url: "/checkers/",
				name: "Checkers",
			},
		],
	},
	{
		name: "Multiple Players",
		games: [
			{
				imgUri: "/img/bg/original/bright-forest-stump.jpg",
				url: "/memory/",
				name: "Memory",
			},
			{
				imgUri: "/img/bg/original/autumn-trees.jpg",
				url: "/dotsandboxes/",
				name: "Dots & Boxes",
			},
		],
	},
	{},
];

export function Home() {
	const [gameGroups] = useState(GAME_GROUPS);

	return (
		<PageLayoutContainer>
			<main>
				<nav>
					<VisuallyHidden as="h2">Games</VisuallyHidden>

					{gameGroups.map(({ name, games }) => (
						<S.Section key={`game-group_${name}`}>
							<S.SectionHeadline as="h3">
								{name}
							</S.SectionHeadline>

							<S.CardGrid>
								{games &&
									games.map(({ name, url, imgUri }) => (
										<CardBillboard
											imgUri={imgUri}
											key={`game_${name}`}
										>
											<CardBillboardHeadline tag="h4">
												<CardBillboardCoverLink
													to={url}
												>
													{name}
												</CardBillboardCoverLink>
											</CardBillboardHeadline>
										</CardBillboard>
									))}
							</S.CardGrid>
						</S.Section>
					))}
				</nav>
			</main>
		</PageLayoutContainer>
	);
}