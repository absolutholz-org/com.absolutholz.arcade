import { ReactNode } from 'react';

export interface ICardBillboardProps {
	children: ReactNode;
	slotBackground: ReactNode;
}

export interface ICardBillboardBackgroundImageProps {
	imgUri: string;
}

export interface ICardBillboardHeadlineProps {
	children: ReactNode;
	tag?: keyof JSX.IntrinsicElements;
}
