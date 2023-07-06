import Checkbox from '@mui/material/Checkbox';

import { Stack } from '@arcade/library-components/src/components/Stack';
import { Typography } from '@arcade/library-components/src/components/Typography';

import { useGameConfig } from '../../../../contexts/GameConfigContext';
import { WINNING_COMBINATIONS } from '../../../../App.constants';
import type { WinningCombination } from '../../../../GameConfig.types';

export function WinningCombinations(): JSX.Element {
	const {winningCombinations, setGameConfig} = useGameConfig();

	function handleChange(combo: WinningCombination) {
		const _winningCombinations = winningCombinations.includes(combo) 
			? winningCombinations.filter((winningCombination) => winningCombination != combo)
			: [...winningCombinations, combo];
		setGameConfig({ winningCombinations: _winningCombinations });
	}

	return (
		<Stack direction='row' spacingX='s'>
			{WINNING_COMBINATIONS.map((combo) => (
				<label key={`combos_${combo}`} htmlFor={`combos_${combo}`}>
					<Checkbox
						checked={winningCombinations.includes(combo)}
						id={`combos_${combo}`}
						onChange={() => handleChange(combo)}
						value={combo}
					/>
					<Typography as='span'>{combo}</Typography>
				</label>
			))}
		</Stack>
	);
}
