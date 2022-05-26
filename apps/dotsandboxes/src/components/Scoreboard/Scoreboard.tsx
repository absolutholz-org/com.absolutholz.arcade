import { useEffect, useState } from 'react';

import {
	NotificationGameOver,
	NotificationTurn,
} from '@arcade/library-components';

import { GameStateAction, useGameState } from '../../context/GameState';
import { IDotsAndBoxesPlayer } from '../../dataModels';
import { GameState } from '../../enums';
import { IScoreboardProps } from './IScoreboard';
import * as S from './Scoreboard.styled';

export function Scoreboard({ ...props }: IScoreboardProps): JSX.Element {
	const { gameState, players, currentPlayer, dispatch } = useGameState();
	const [winners, setWinners] = useState<IDotsAndBoxesPlayer[]>([]);

	const handleNewGame = () => {
		dispatch({
			type: GameStateAction.NewGame,
		});
	};

	useEffect(() => {
		if (gameState === GameState.GameOver) {
			let winningPlayers = [players[0]];
			players.slice(1).forEach((player) => {
				if (player.gameBoxCount > winningPlayers[0].gameBoxCount) {
					winningPlayers = [player];
				} else if (
					player.gameBoxCount === winningPlayers[0].gameBoxCount
				) {
					winningPlayers.push(player);
				}
			});

			setWinners(winningPlayers);
		}
	}, [gameState]);

	return (
		<>
			<S.ScoreboardGrid {...props}>
				{players &&
					players.map((player) => (
						<section key={`scoreboard-player_${player.uuid}`}>
							<S.ScoreboardPlayerName $color={player.color}>
								{player.displayName}
							</S.ScoreboardPlayerName>
							<div>Lines: {player.gameLineCount}</div>
							<div>Boxes: {player.gameBoxCount}</div>
							{player === currentPlayer && <span> current</span>}
						</section>
					))}
			</S.ScoreboardGrid>
			<button onClick={handleNewGame}>new game</button>
			{currentPlayer && (
				<NotificationTurn playerName={currentPlayer.displayName} />
			)}
			<NotificationGameOver
				winnerPlayers={winners}
				isOpen={gameState === GameState.GameOver}
				onNewGameClick={handleNewGame}
			/>
		</>
	);
}
