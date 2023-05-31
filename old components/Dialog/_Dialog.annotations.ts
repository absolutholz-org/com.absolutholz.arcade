import { ReactNode } from 'react';

export type DialogProps = {
	children: ReactNode;
	onClose: () => void;

	icon?: string;
	isModal?: boolean;
	shouldShow?: boolean;
};
