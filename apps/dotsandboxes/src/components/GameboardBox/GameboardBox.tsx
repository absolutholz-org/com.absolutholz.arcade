import * as S from './GameboardBox.styled';
import { IGameboardBoxProps } from './IGameboardBox';

export function GameboardBox({
	box,
	isLastColumnInRow,
	isLastRowInColumn,
	...props
}: IGameboardBoxProps): JSX.Element {
	const { rowIndex, columnIndex, borders } = box;

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
				color={
					borders[
						`${rowIndex}x${columnIndex}|${
							rowIndex + 1
						}x${columnIndex}`
					]
				}
			/>
			<S.ButtonTop
				startRowID={rowIndex}
				startColumnID={columnIndex}
				endRowID={rowIndex}
				endColumnID={columnIndex + 1}
				color={
					borders[
						`${rowIndex}x${columnIndex}|${rowIndex}x${
							columnIndex + 1
						}`
					]
				}
			/>
			{isLastColumnInRow && (
				<S.ButtonRight
					startRowID={rowIndex}
					startColumnID={columnIndex + 1}
					endRowID={rowIndex + 1}
					endColumnID={columnIndex + 1}
					color={
						borders[
							`${rowIndex}x${columnIndex + 1}|${rowIndex + 1}x${
								columnIndex + 1
							}`
						]
					}
				/>
			)}
			{isLastRowInColumn && (
				<S.ButtonBottom
					startRowID={rowIndex + 1}
					startColumnID={columnIndex}
					endRowID={rowIndex + 1}
					endColumnID={columnIndex + 1}
					color={
						borders[
							`${rowIndex + 1}x${columnIndex}|${rowIndex + 1}x${
								columnIndex + 1
							}`
						]
					}
				/>
			)}
			{/* <S.PlayerName>
				{box.player && <>{box.player.displayName}</>}
			</S.PlayerName> */}
		</S.GameboardBox>
	);
}
