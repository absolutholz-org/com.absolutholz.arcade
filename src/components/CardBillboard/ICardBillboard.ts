import { FunctionComponent, ReactNode } from 'react';

export interface ICardBillboardProps {
    children: ReactNode;
    imgUri: string;
}

export interface ICardBillboardHeadlineProps {
    children: ReactNode;
    tag?: keyof JSX.IntrinsicElements;
}
