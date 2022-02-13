import { TicTacToePiece } from '../../enums/TicTacToePiece';
import { IPlayerConfigProps } from './IPlayerConfig';

export function PlayerConfig({
	id,
	player,
	setPlayer,
	onPieceSelection,
}: IPlayerConfigProps): JSX.Element {
	const handleNameChange = (name: string): void => {
		setPlayer((player) => {
			return {
				...player,
				displayName: name,
			};
		});
	};

	const handlePieceChange = (piece: TicTacToePiece): void => {
		setPlayer((player) => {
			return {
				...player,
				piece,
			};
		});
		onPieceSelection(piece);
	};

	return (
		<fieldset>
			<legend>Player {id}</legend>

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
			</label>

			<fieldset>
				<legend>Piece</legend>

				<label htmlFor={`player-${id}_piece-x `}>
					<span>X</span>
					<input
						checked={player.piece === TicTacToePiece.X}
						id={`player-${id}_piece-x `}
						name={`player-${id}_piece `}
						onChange={() => handlePieceChange(TicTacToePiece.X)}
						required
						type='radio'
						value={TicTacToePiece.X}
					/>
				</label>

				<label htmlFor={`player-${id}_piece-o `}>
					<span>O</span>
					<input
						checked={player.piece === TicTacToePiece.O}
						id={`player-${id}_piece-o `}
						name={`player-${id}_piece `}
						onChange={() => handlePieceChange(TicTacToePiece.O)}
						required
						type='radio'
						value={TicTacToePiece.O}
					/>
				</label>
			</fieldset>
		</fieldset>
	);
}
