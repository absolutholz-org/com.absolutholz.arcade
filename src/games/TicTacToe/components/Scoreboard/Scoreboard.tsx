import { IScoreboardProps } from './IScoreboard';

export function Scoreboard({
	displayName,
	gamesWon,
}: IScoreboardProps): JSX.Element {
	return (
		<div>
			<div>{displayName}</div>
			<div>won {gamesWon}</div>
		</div>
	);
}
