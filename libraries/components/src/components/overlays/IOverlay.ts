import { ReactNode } from 'react';

export interface IOverlay {
	children: ReactNode;
	isModal?: boolean;
	show?: boolean;
	onClose: () => void;
}
