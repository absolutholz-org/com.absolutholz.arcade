import Checkbox from '@mui/material/Checkbox';

import { Stack } from '@arcade/library-components/src/components/Stack';
import { Typography } from '@arcade/library-components/src/components/Typography';

import { WINNING_COMBINATIONS } from '../../../../App.constants';
import type { WinningCombinationsProps } from './_WinningCombinations.types';

export function WinningCombinations({
	selection,
	onChange,
}: WinningCombinationsProps): JSX.Element {
	return (
		<fieldset>
			<Typography as='legend' size='l'>
				Winning combinations
			</Typography>

			<Stack direction='row' spacingX='s'>
				{WINNING_COMBINATIONS.map((combo) => (
					<label key={`combos_${combo}`} htmlFor={`combos_${combo}`}>
						<Checkbox
							checked={selection.includes(combo)}
							id={`combos_${combo}`}
							onChange={onChange}
							value={combo}
						/>
						<Typography as='span'>{combo}</Typography>
					</label>
				))}
			</Stack>
		</fieldset>
	);
}
