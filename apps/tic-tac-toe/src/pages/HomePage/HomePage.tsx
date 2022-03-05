import { ChangeEvent, FormEvent, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { TicTacToePiece } from '../../enums/TicTacToePiece';
import { PlayerConfig } from '../../components/PlayerConfig';
import {
	Button,
	PageLayoutContainer,
	SiteHeader,
	SiteFooter,
} from '@arcade/components';
import { PlayersContext } from '../../context/Players';
import { GameConfigurationAction, GameTheme } from '../../enums';
import { useGameConfiguration } from '../../context/GameConfiguration';
import { GameThemeSelector } from '../../components/GameThemeSelector';

export function HomePage(): JSX.Element {
	const { player1, setPlayer1, player2, setPlayer2 } =
		useContext(PlayersContext);
	const navigate = useNavigate();

	const handlePlayer1PieceSelection = (piece: TicTacToePiece): void => {
		setPlayer2((player) => {
			return {
				...player,
				piece:
					piece === TicTacToePiece.X
						? TicTacToePiece.O
						: TicTacToePiece.X,
			};
		});

		return;
	};

	const handlePlayer2PieceSelection = (piece: TicTacToePiece): void => {
		setPlayer1((player) => {
			return {
				...player,
				piece:
					piece === TicTacToePiece.X
						? TicTacToePiece.O
						: TicTacToePiece.X,
			};
		});

		return;
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

						<PlayerConfig
							id='1'
							player={player1}
							setPlayer={setPlayer1}
							onPieceSelection={handlePlayer1PieceSelection}
						/>

						<PlayerConfig
							id='2'
							player={player2}
							setPlayer={setPlayer2}
							onPieceSelection={handlePlayer2PieceSelection}
						/>
					</fieldset>

					<fieldset>
						<legend>Theme</legend>

						<GameThemeSelector />

						{/* <select
							onChange={handleThemeSelection}
							defaultValue={gameTheme}>
							{Object.keys(GameTheme).map((gameThemeID) => (
								<option key={gameThemeID} value={gameThemeID}>
									{gameThemeID}
								</option>
							))}
						</select> */}
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
