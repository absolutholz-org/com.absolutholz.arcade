import { TicTacToePiece } from '../../enums/TicTacToePiece';
import { IconO } from '../IconO';
import { IconX } from '../IconX';
import { IPlayerConfigProps } from './IPlayerConfig';
import * as S from './PlayerConfig.styled';

export function PlayerConfig({
	id,
	player,
	setPlayer,
}: IPlayerConfigProps): JSX.Element {
	const handleNameChange = (name: string): void => {
		setPlayer((player) => {
			return {
				...player,
				displayName: name,
			};
		});
	};

	return (
		<div>
			{/* <legend>Player {id}</legend>

			<label htmlFor={`player-${id}_name `}>
				<div>Name</div>
				<input
					id={`player-${id}_name `}
					name={`player-${id}_name `}
					onChange={(e) => handleNameChange(e.target.value)}
					required
					type='text'
					value={player.displayName}
				/>
			</label> */}

			<S.PlayerName>{player.displayName}</S.PlayerName>

			<S.IconWrapper>
				{player.piece === TicTacToePiece.X ? <IconX /> : <IconO />}
			</S.IconWrapper>
		</div>
	);
}
