import { VisuallyHidden } from '@arcade/library-components';
import { useGameConfiguration } from '../../context/GameConfiguration';
import { PlayerColor } from '../../enums';
import * as S from './ColorSelector.styled';
import { IColorOptionProps, IColorSelectorProps } from './IColorSelector';

const COLORS = Object.values(PlayerColor);

function ColorOption({
	color,
	disabled,
	selectedColor,
	onSelect,
}: IColorOptionProps): JSX.Element {
	return (
		<label htmlFor={`color-selection-option_${color}`}>
			<VisuallyHidden
				as='input'
				checked={selectedColor === color}
				disabled={disabled}
				id={`color-selection-option_${color}`}
				name='color-selection-option'
				onChange={() => onSelect(color as PlayerColor)}
				type='radio'
				value={color}
			/>
			<S.Card
				slotBackground={
					<>
						<S.CheckedFlag />
						<S.CardBackground $color={color}></S.CardBackground>
					</>
				}>
				<S.CardTitle>{color}</S.CardTitle>
			</S.Card>
		</label>
	);
}

export function ColorSelector({
	onSelect,
	selectedColor,
	slotLegend,
}: IColorSelectorProps): JSX.Element {
	const { players } = useGameConfiguration();

	const availableColors = COLORS.filter(
		(color) => players.findIndex((player) => player.color === color) < 0
	);

	return (
		<S.ColorSelector>
			<S.Legend>{slotLegend}</S.Legend>
			<S.CardGrid>
				{COLORS.map((color) => (
					<ColorOption
						color={color}
						disabled={
							availableColors.findIndex(
								(availableColor) => availableColor === color
							) < 0 && selectedColor !== color
						}
						key={`color-selection-option_${color}`}
						selectedColor={selectedColor}
						onSelect={onSelect}
					/>
				))}
			</S.CardGrid>
		</S.ColorSelector>
	);
}
