import Checkbox from '@mui/material/Checkbox';

import { Stack } from '@arcade/library-components/src/components/Stack';
import { Typography } from '@arcade/library-components/src/components/Typography';

import { useGameConfig } from '../../contexts/ConfigContext';
import { WINNING_COMBINATIONS } from '../../../../App.constants';
import type { WinningCombination } from '../../../../App.types';

export function WinningCombinations(): JSX.Element {
	const {gameConfig, setGameConfig} = useGameConfig();

	function handleChange(combo: WinningCombination) {
		const winningCombinations = gameConfig.winningCombinations.includes(combo) 
			? gameConfig.winningCombinations.filter((winningCombination) => winningCombination != combo)
			: [...gameConfig.winningCombinations, combo];
		setGameConfig({ winningCombinations });
	}

	return (
		<fieldset>
			<Typography as='legend' size='l'>
				Winning combinations
			</Typography>

			<Stack direction='row' spacingX='s'>
				{WINNING_COMBINATIONS.map((combo) => (
					<label key={`combos_${combo}`} htmlFor={`combos_${combo}`}>
						<Checkbox
							checked={gameConfig.winningCombinations.includes(combo)}
							id={`combos_${combo}`}
							onChange={() => handleChange(combo)}
							value={combo}
						/>
						<Typography as='span'>{combo}</Typography>
					</label>
				))}
			</Stack>
		</fieldset>
	);
}
