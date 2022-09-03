import { useState } from 'react';

import { IconSize, VisuallyHidden } from '@arcade/library-components';

import { GameSize, useGameConfiguration } from '../../context/GameConfiguration';
import * as S from './FieldsetSize.styled';
import { ReactComponent as Icon3x3 } from '../../assets/tic-tac-toe-3x3.svg';
import { ReactComponent as Icon4x4 } from '../../assets/tic-tac-toe-4x4.svg';
import { ReactComponent as Icon5x5 } from '../../assets/tic-tac-toe-5x5.svg';

const SIZES = [
	{
		value: '3x3',
		icon: <Icon3x3 />,
		iconSize: '1em',
	},
	{
		value: '4x4',
		icon: <Icon4x4 />,
		iconSize: '1.25em',
	},
	{
		value: '5x5',
		icon: <Icon5x5 />,
		iconSize: '1.5em',
	},
];

export function FieldsetSize(): JSX.Element {
	const { gameSize, dispatch } = useGameConfiguration();

	const setSize = (size: GameSize) => {
		dispatch({
			type: 'SetSize',
			size,
		});
	};

	return (
		<S.FieldsetSize>
			<S.FieldsetSizeLegend>Size</S.FieldsetSizeLegend>
			<S.FieldsetSizeOptionGrid>
				{SIZES.map((size) => (
					<>
						<VisuallyHidden
							as='input'
							checked={gameSize === size.value}
							id={`size_${size.value}`}
							name='size'
							onChange={() => setSize(size.value as GameSize)}
							required
							type='radio'
							value={size.value}
						/>
						<S.FieldsetSizeOption htmlFor={`size_${size.value}`}>
							<S.FieldsetSizeOptionIcon icon={size.icon} size={size.iconSize as IconSize} />
							<S.FieldsetSizeOptionLabel>{size.value}</S.FieldsetSizeOptionLabel>
						</S.FieldsetSizeOption>
					</>
				))}
			</S.FieldsetSizeOptionGrid>
		</S.FieldsetSize>
	);
}
