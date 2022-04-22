import { useState } from 'react';

import SvgChange from 'mdi-react/PencilIcon';

import * as S from './GameSizeSelector.styled';
import { useGameConfiguration } from '../../context/GameConfiguration';
import { GameConfigurationAction, GameSize } from '../../enums';
import {
	ButtonIcon,
	ButtonVariant,
	DialogConfirm,
	Icon,
} from '@arcade/library-components';

export function GameSizeSelector(): JSX.Element {
	const { gameSize, dispatch } = useGameConfiguration();
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [size, setSize] = useState(gameSize);

	const handleDialogConfirm = () => {
		dispatch({
			type: GameConfigurationAction.SetSize,
			size,
		});
		setIsDialogOpen(false);
	};

	return (
		<div>
			<S.ThemeName>
				<span>
					{gameSize} x {gameSize}
				</span>
				<ButtonIcon
					inline={true}
					onClick={() => setIsDialogOpen(true)}
					variant={ButtonVariant.Text}>
					<Icon icon={SvgChange} />
				</ButtonIcon>
			</S.ThemeName>

			<DialogConfirm
				isOpen={isDialogOpen}
				onCancel={() => setIsDialogOpen(false)}
				onConfirm={handleDialogConfirm}>
				<S.ThemeGrid>
					{Object.entries(GameSize)
						.filter(([key, value]) => !isNaN(Number(value)))
						.map(([key, value]) => (
							<S.GameTheme
								as='label'
								htmlFor={`gameSize-${key}`}
								key={`gameSize-${key}`}>
								<input
									checked={size === value}
									id={`gameSize-${key}`}
									name='gameSize'
									onChange={() => setSize(value as GameSize)}
									type='radio'
									value={value}
								/>
								<S.Title>
									{value} x {value}
								</S.Title>
							</S.GameTheme>
						))}
				</S.ThemeGrid>
			</DialogConfirm>
		</div>
	);
}
