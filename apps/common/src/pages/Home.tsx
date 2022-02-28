import { useContext, useState } from 'react';

import { UserContext } from '@arcade/common/context/User';
import {
	Button,
	CardBillboard,
	CardBillboardCoverLink,
	CardBillboardHeadline,
	ColorSchemeToggler,
	Dialog,
	PageLayoutContainer,
	PlayerForm,
	VisuallyHidden,
} from '@arcade/components';

// import { ReactComponent as SvgJoystick } from '../assets/joystick.svg';

import * as S from './Home.styled';

const GAME_GROUPS = [
	{
		name: 'Single Player',
		games: [
			{
				imgUri: '/img/bg/original/purple-mountain-lake.jpg',
				url: '/sudoku',
				name: 'Sudoku',
			},
			{
				imgUri: '/img/bg/original/purple-flowers-sunset.jpg',
				url: '/minesweeper',
				name: 'Minesweeper',
			},
		],
	},
	{
		name: 'Two Players',
		games: [
			{
				imgUri: '/img/bg/original/green-hills.jpg',
				url: '/tictactoe',
				name: 'Tic Tac Toe',
			},
			{
				imgUri: '/img/bg/original/desert-river.jpg',
				url: '/connect4',
				name: 'Connect 4',
			},
			{
				imgUri: '/img/bg/original/dead-tree-prairie.jpg',
				url: '/checkers',
				name: 'Checkers',
			},
		],
	},
	{
		name: 'Multiple Players',
		games: [
			{
				imgUri: '/img/bg/original/bright-forest-stump.jpg',
				url: '/memory',
				name: 'Memory',
			},
			{
				imgUri: '/img/bg/original/autumn-trees.jpg',
				url: '/dotsandboxes',
				name: 'Dots & Boxes',
			},
		],
	},
	{},
];

export function Home(): JSX.Element {
	const [isPlayerDialogOpen, setIsPlayerDialogOpen] = useState(false);
	const [gameGroups] = useState(GAME_GROUPS);

	const { user, saveUser, clearUser } = useContext(UserContext);

	const closePlayerDialog = () => {
		setIsPlayerDialogOpen(false);
	};

	const openPlayerDialog = () => {
		setIsPlayerDialogOpen(true);
	};

	const handlePlayerFormSubmit = (name: string) => {
		console.log({ name });
		closePlayerDialog();
		saveUser({
			displayName: name,
		});
	};

	return (
		<PageLayoutContainer>
			<main>
				<S.SectionHeader
					tag='h1'
					// slotIconPrefix={
					// 	<S.PageHeadlineIcon>{SvgJoystick}</S.PageHeadlineIcon>
					// }
					verticalAlignment='end'>
					<S.PageHeadlineSub>absolutholz</S.PageHeadlineSub>
					<S.PageHeadline>Arcade</S.PageHeadline>
				</S.SectionHeader>

				<nav>
					<VisuallyHidden as='h2'>Games</VisuallyHidden>

					{gameGroups.map(({ name, games }) => (
						<S.Section key={`game-group_${name}`}>
							<S.SectionHeadline as='h3'>
								{name}
							</S.SectionHeadline>

							<S.CardGrid>
								{games &&
									games.map(({ name, url, imgUri }) => (
										<CardBillboard
											imgUri={imgUri}
											key={`game_${name}`}>
											<CardBillboardHeadline tag='h4'>
												<CardBillboardCoverLink
													to={url}>
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

			<footer>
				<div>
					<ColorSchemeToggler />
				</div>

				{user?.displayName && (
					<div>
						<div>
							Hello <strong>{user.displayName}</strong>
						</div>
						<button onClick={clearUser}>log out</button>
					</div>
				)}

				{!user && <button onClick={openPlayerDialog}>Log in</button>}
			</footer>

			<Dialog
				isOpen={isPlayerDialogOpen}
				slotFooter={
					<Button form='homePlayer' type='submit'>
						Save
					</Button>
				}>
				<PlayerForm
					formID='homePlayer'
					onSubmit={handlePlayerFormSubmit}
				/>
			</Dialog>
		</PageLayoutContainer>
	);
}
