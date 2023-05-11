import { ChangeEvent } from 'react';

import type { WinningCombination } from '../../../../App.types';

export type WinningCombinationsProps = {
	selection: WinningCombination[];
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
