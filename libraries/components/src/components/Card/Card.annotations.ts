import { ReactNode } from 'react';

export interface CardProps {
	children: ReactNode;
	tag?: keyof JSX.IntrinsicElements;
}
