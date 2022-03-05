import { ChangeEvent, FormEvent, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { TicTacToePiece } from '../../enums/TicTacToePiece';
import { PlayerConfig } from '../../components/PlayerConfig';
import {
	Button,
	ButtonIcon,
	PageLayoutContainer,
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
					<h1>Tic Tac Toe</h1>

					<fieldset>
						<legend>Players</legend>
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
					</fieldset>

					<fieldset>
						<legend>Theme</legend>

						<GameThemeSelector />
					</fieldset>

					<fieldset>
						<legend>Rules</legend>
					</fieldset>

					<Button
						disabled={
							player1.displayName === '' ||
							player2.displayName === ''
						}>
						Start Game
					</Button>
				</form>
			</PageLayoutContainer>
			<SiteFooter />
		</>
	);
}
