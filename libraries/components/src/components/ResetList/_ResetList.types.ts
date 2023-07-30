import { ReactNode } from 'react';

export type IResetList = {
	children: ReactNode;
	className?: string;
	tag?: 'ul' | 'ol';
};
