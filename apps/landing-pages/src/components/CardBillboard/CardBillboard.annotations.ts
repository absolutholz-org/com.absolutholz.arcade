import { ReactNode } from 'react';

export interface CardBillboardProps {
	children: ReactNode;
	slotBackground: ReactNode;
}

export interface CardBillboardBackgroundImageProps {
	imgUri: string;
}

export interface CardBillboardHeadlineProps {
	children: ReactNode;
	tag?: keyof JSX.IntrinsicElements;
}
