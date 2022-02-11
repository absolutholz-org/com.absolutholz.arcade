import { FormEvent, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { TicTacToePiece } from '../../enums/TicTacToePiece';
import { PlayerConfig } from '../../components/PlayerConfig';
import { Button } from '../../../../components/Button';
import { SiteHeader } from '../../../../components/SiteHeader';
import { SiteFooter } from '../../../../components/SiteFooter';
import { PlayersContext } from '../../context/Players';
import { PageLayoutContainer } from '../../../../components/PageLayoutContainer';

export function Home(): JSX.Element {
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
