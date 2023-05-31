import { Link } from 'react-router-dom';

// import { getGroupedGames, IGame } from '@arcade/library-common';

import type { SiteFooterProps } from './SiteFooter.annotations';
import * as S from './SiteFooter.styled';

import { ContentContainer } from '../layout/ContentContainer';
import { VerticallyPaddedContainer } from '../layout/VerticallyPaddedContainer';
import { ColorSchemeToggler } from '../ColorSchemeToggler';
import { LogoTextInline } from '../logos/LogoTextInline';
import { VisuallyHidden } from '../layout/VisuallyHidden';
// import { useAuth } from '@arcade/library-authentication';
import { Button } from '@arcade/library-components/src/components/buttons/Button';

// const gameGroups = getGroupedGames();
// const gamesSinglePlayer = gameGroups['single'];
// const gamesTwoPlayers = gameGroups['two'];
// const gamesMultiPlayers = gameGroups['multi'];

// function GameSection({
// 	headline,
// 	games,
// }: {
// 	headline: string;
// 	games: IGame[];
// }): JSX.Element {
// 	return (
// 		<VerticallyPaddedContainer
// 			as='section'
// 			spacing={50}
// 			slotHeaderSpacing={25}
// 			slotHeader={
// 				<S.SiteFooterHeadline>{headline}</S.SiteFooterHeadline>
// 			}>
// 			<S.SiteFooterLinkList>
// 				{games.map(({ name, url }) => (
// 					<li key={name}>
// 						<a href={url}>{name}</a>
// 					</li>
// 				))}
// 			</S.SiteFooterLinkList>
// 		</VerticallyPaddedContainer>
// 	);
// }

export function SiteFooter({}: SiteFooterProps): JSX.Element {
	// const { user, showAuthDialog, signOut } = useAuth();

	return (
		<ContentContainer>
			<VerticallyPaddedContainer spacing={200}>
				<S.SiteFooter>
					<VerticallyPaddedContainer
						omit='top'
						slotHeader={<LogoTextInline />}
						slotHeaderSpacing={50}
						spacing={100}>
						<S.SiteFooterNavigation as='nav'>
							<Link to='/'>Home</Link>
							<Link to='/accessibility-statement'>
								Accessibility Statement
							</Link>
						</S.SiteFooterNavigation>
					</VerticallyPaddedContainer>

					<S.SiteFooterGames as='nav'>
						<VisuallyHidden as='h3'>Games</VisuallyHidden>
						{/* <GameSection headline='Single Player' games={gamesSinglePlayer} />

						<GameSection headline='Two Players' games={gamesTwoPlayers} />

						<GameSection headline='Multiple Players' games={gamesMultiPlayers} /> */}
					</S.SiteFooterGames>

					<VerticallyPaddedContainer
						spacing={100}
						omit='bottom'
						slotHeaderSpacing={25}
						slotHeader={
							<S.SiteFooterHeadline>
								Arcade Settings
							</S.SiteFooterHeadline>
						}>
						{/* <VerticallyPaddedContainer omit='top' spacing={50}>
							{user && (
								<>
									Logged in as: {user.displayName}
									<Button
										onClick={signOut}
										type='button'
										variant='text'>
										Log out
									</Button>
								</>
							)}
							{!user && (
								<>
									You are currently not logged in.
									<Button
										onClick={showAuthDialog}
										type='button'
										variant='text'>
										Sign in / up
									</Button>
								</>
							)}
						</VerticallyPaddedContainer> */}

						<VerticallyPaddedContainer omit='top' spacing={50}>
							Color Mode:
							<ColorSchemeToggler variant='text' />
						</VerticallyPaddedContainer>
					</VerticallyPaddedContainer>
				</S.SiteFooter>
			</VerticallyPaddedContainer>
		</ContentContainer>
	);
}
