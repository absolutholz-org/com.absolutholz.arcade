import { ReactNode } from 'react';

import { Space } from '../../../foundations/spacing/space';

export interface VerticallyPaddedContainerProps {
	children: ReactNode;
	slotHeader?: ReactNode;
	slotHeaderSpacing?: Space;
	spacing?: Space;
	omit?: 'top' | 'bottom';
}
