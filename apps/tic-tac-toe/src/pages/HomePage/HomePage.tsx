import { ChangeEvent, FormEvent, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { TicTacToePiece } from '../../enums/TicTacToePiece';
import { PlayerConfig } from '../../components/PlayerConfig';
import {
	Button,
	ButtonIcon,
	PageLayoutContainer,
	HeadlinePage,
	HeadlineSectionLevel1,
	SiteHeader,
	SiteFooter,
	Icon,
	IconSize,
	ButtonVariant,
} from '@arcade/components';
import { PlayersContext } from '../../context/Players';
import { GameConfigurationAction, GameTheme } from '../../enums';
import { useGameConfiguration } from '../../context/GameConfiguration';
import { GameThemeSelector } from '../../components/GameThemeSelector';

import SvgSwap from 'mdi-react/SwapHorizontalIcon';

import * as S from './HomePage.styled';

export function HomePage(): JSX.Element {
	const { player1, setPlayer1, player2, setPlayer2 } =
		useContext(PlayersContext);
	const navigate = useNavigate();

	const handleSwapPlayerPieces = () => {
		let player1Piece = TicTacToePiece.X;
		let player2Piece = TicTacToePiece.O;

		if (player1.piece === TicTacToePiece.X) {
			player1Piece = TicTacToePiece.O;
			player2Piece = TicTacToePiece.X;
		}

		setPlayer1((player) => {
			return {
				...player,
				piece: player1Piece,
			};
		});

		setPlayer2((player) => {
			return {
				...player,
				piece: player2Piece,
			};
		});
	};

	const handleStartGame = (event: FormEvent) => {
		event.preventDefault();
		navigate('game');
	};

	return (
		<>
			<SiteHeader />
			<PageLayoutContainer>
				<form onSubmit={handleStartGame}>
					<HeadlinePage as='h1'>Tic Tac Toe</HeadlinePage>

					<S.Section as='fieldset'>
						<S.SectionHeadline as='legend'>
							Players
						</S.SectionHeadline>

						<S.PlayersContainer>
							<PlayerConfig
								id='1'
								player={player1}
								setPlayer={setPlayer1}
							/>

							<ButtonIcon
								inline={true}
								onClick={handleSwapPlayerPieces}
								type='button'
								variant={ButtonVariant.Ghost}>
								<Icon icon={SvgSwap} size={IconSize.x400} />
							</ButtonIcon>

							<PlayerConfig
								id='2'
								player={player2}
								setPlayer={setPlayer2}
							/>
						</S.PlayersContainer>
					</S.Section>

					<S.Section as='fieldset'>
						<S.SectionHeadline as='legend'>Theme</S.SectionHeadline>

						<GameThemeSelector />
					</S.Section>

					<S.Section>
						<Button type='submit'>Start Game</Button>
					</S.Section>
				</form>
			</PageLayoutContainer>
			<SiteFooter />
		</>
	);
}
