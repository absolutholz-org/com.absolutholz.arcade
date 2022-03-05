import { IconSize, VisuallyHidden } from '@arcade/components';
import { ChangeEvent } from 'react';

import * as S from './GameThemeSelector.styled';
import { useGameConfiguration } from '../../context/GameConfiguration';
import { GameConfigurationAction, GameTheme } from '../../enums';
import { IconO } from '../IconO';
import { IconX } from '../IconX';

export function GameThemeSelector(): JSX.Element {
	const { gameTheme, dispatch } = useGameConfiguration();

	const handleThemeSelection = (event: ChangeEvent) => {
		const elSelect = event.target as HTMLSelectElement;
		const theme = elSelect.value as GameTheme;

		dispatch({
			type: GameConfigurationAction.SetTheme,
			payload: { theme },
		});
	};

	return (
		<S.GameThemeSelector>
			{Object.keys(GameTheme).map((gameThemeID) => (
				<S.GameTheme
					as='label'
					htmlFor={`gameTheme-${gameThemeID}`}
					key={`gameTheme-${gameThemeID}`}>
					{/* {gameTheme === gameThemeID && <S.Flag>selected</S.Flag>} */}

					<input
						checked={gameTheme === gameThemeID}
						id={`gameTheme-${gameThemeID}`}
						name='gameTheme'
						onChange={handleThemeSelection}
						type='radio'
						value={gameThemeID}
					/>

					<S.Title>{gameThemeID}</S.Title>

					<S.IconWrapper>
						<IconX
							iconSize={IconSize.x400}
							theme={gameThemeID as GameTheme}
						/>
						<IconO
							iconSize={IconSize.x400}
							theme={gameThemeID as GameTheme}
						/>
					</S.IconWrapper>
				</S.GameTheme>
			))}
		</S.GameThemeSelector>
	);
}
