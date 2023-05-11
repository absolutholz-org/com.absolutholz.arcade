import Radio from '@mui/material/Radio';

import { Stack } from '@arcade/library-components/src/components/Stack';
import { Typography } from '@arcade/library-components/src/components/Typography';

import { FREE_SPACE_POSITIONS } from '../../../../App.constants';
import type { FreeSpaceProps } from './_FreeSpace.types';

export function FreeSpace({
	selection,
	onChange,
}: FreeSpaceProps): JSX.Element {
	return (
		<fieldset>
			<Typography as='legend' level={1}>
				Free space
			</Typography>

			<Stack direction='row' spaceLevelX='s'>
				{FREE_SPACE_POSITIONS.map((space) => (
					<label
						htmlFor={`free-space_${space}`}
						key={`free-space_${space}`}>
						<Radio
							checked={selection === space}
							id={`free-space_${space}`}
							name='free-space'
							onChange={onChange}
							value={space}
						/>
						{space}
					</label>
				))}
			</Stack>
		</fieldset>
	);
}
