import { ReactNode } from 'react';

export interface ICardProps {
    children: ReactNode;
    tag?: keyof JSX.IntrinsicElements;
}
