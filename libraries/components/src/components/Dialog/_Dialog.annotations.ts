import { ReactNode } from 'react';

export type DialogProps = {
	children: ReactNode;
	onClose: () => void;
	icon?: string;
	iconEffect?: JSX.Element;
	isModal?: boolean;
	shouldShow?: boolean;
};
