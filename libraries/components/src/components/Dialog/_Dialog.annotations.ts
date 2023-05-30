import { ReactNode } from 'react';

export type DialogProps = {
	children: ReactNode;
	isModal?: boolean;
	shouldShow?: boolean;
	icon: string;
	onClose: () => void;
};
