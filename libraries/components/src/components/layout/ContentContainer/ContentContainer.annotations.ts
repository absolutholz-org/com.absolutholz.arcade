import { ReactNode } from 'react';

export interface ContentContainerProps {
	children: ReactNode;
	$size?: 'base' | 'wide' | 'full';
}
