import * as S from './GameboardBox.styled';
import { IGameboardBoxProps } from './IGameboardBox';

export function GameboardBox({
	box,
	isLastColumnInRow,
	isLastRowInColumn,
	...props
}: IGameboardBoxProps): JSX.Element {
	const { rowIndex, columnIndex } = box;

	return (
		<S.GameboardBox
			color={box.player?.color}
			id={`box-${rowIndex}x${columnIndex}`}
			{...props}>
			<S.ButtonLeft
				startRowID={rowIndex}
				startColumnID={columnIndex}
				endRowID={rowIndex + 1}
				endColumnID={columnIndex}
			/>
			<S.ButtonTop
				startRowID={rowIndex}
				startColumnID={columnIndex}
				endRowID={rowIndex}
				endColumnID={columnIndex + 1}
			/>
			{isLastColumnInRow && (
				<S.ButtonRight
					startRowID={rowIndex}
					startColumnID={columnIndex + 1}
					endRowID={rowIndex + 1}
					endColumnID={columnIndex + 1}
				/>
			)}
			{isLastRowInColumn && (
				<S.ButtonBottom
					startRowID={rowIndex + 1}
					startColumnID={columnIndex}
					endRowID={rowIndex + 1}
					endColumnID={columnIndex + 1}
				/>
			)}
			{box.player && <span>{(box.player.displayName = '')}</span>}
		</S.GameboardBox>
	);
}
