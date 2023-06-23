import Radio from '@mui/material/Radio';

import { Stack } from '@arcade/library-components/src/components/Stack';
import { Typography } from '@arcade/library-components/src/components/Typography';

import { useGameConfig } from '../../contexts/ConfigContext';
import { FREE_SPACE_POSITIONS } from '../../../../App.constants';
import type { FreeSpacePosition } from '../../../../App.types';

export function FreeSpace(): JSX.Element {
	const {gameConfig, setGameConfig} = useGameConfig();

	function handleChange(space: FreeSpacePosition) {
		setGameConfig({ freeSpacePosition: space });
	}

	return (
		<fieldset>
			<Typography as='legend' size='l'>
				Free space
			</Typography>

			<Stack direction='row' spacingX='s'>
				{FREE_SPACE_POSITIONS.map((space) => (
					<label
						htmlFor={`free-space_${space}`}
						key={`free-space_${space}`}>
						<Radio
							checked={gameConfig.freeSpacePosition === space}
							id={`free-space_${space}`}
							name='free-space'
							onChange={() => handleChange(space)}
							value={space}
						/>
						{space}
					</label>
				))}
			</Stack>
		</fieldset>
	);
}
