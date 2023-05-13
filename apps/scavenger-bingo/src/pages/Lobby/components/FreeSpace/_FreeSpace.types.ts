import { ChangeEvent } from 'react';

import type { FreeSpacePosition } from '../../../../App.types';

export type FreeSpaceProps = {
	selection: FreeSpacePosition;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
