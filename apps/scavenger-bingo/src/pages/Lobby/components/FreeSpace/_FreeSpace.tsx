import Radio from '@mui/material/Radio';

import { Stack } from '@arcade/library-components/src/components/Stack';

import { useGameConfig } from '../../../../contexts/GameConfigContext';
import { FREE_SPACE_POSITIONS } from '../../../../App.constants';
import type { FreeSpacePosition } from '../../../../GameConfig.types';

export function FreeSpace(): JSX.Element {
	const {freeSpacePosition, setGameConfig} = useGameConfig();

	function handleChange(space: FreeSpacePosition) {
		setGameConfig({ freeSpacePosition: space });
	}

	return (
		<Stack direction='row' spacingX='s'>
			{FREE_SPACE_POSITIONS.map((space) => (
				<label
					htmlFor={`free-space_${space}`}
					key={`free-space_${space}`}>
					<Radio
						checked={freeSpacePosition === space}
						id={`free-space_${space}`}
						name='free-space'
						onChange={() => handleChange(space)}
						value={space}
					/>
					{space}
				</label>
			))}
		</Stack>
	);
}
