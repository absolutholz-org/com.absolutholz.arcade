import { ReactNode } from 'react';

export interface OverlayProps {
	children: ReactNode;
	isModal?: boolean;
	show?: boolean;
	onClose: () => void;
}
