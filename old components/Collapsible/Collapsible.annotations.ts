import { ReactNode } from 'react';

export type CollapsedState = 'collapsed' | 'expanded';

export interface CollapsibleProps {
	children: ReactNode;
	slotSummary: ReactNode;
	state: CollapsedState;
	onCollapse: () => void;
	onExpand: () => void;
}
