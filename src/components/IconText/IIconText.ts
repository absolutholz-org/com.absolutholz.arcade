import { ReactNode } from 'react';

export interface IIconTextProps {
    children: ReactNode;
    slotIconPrefix?: ReactNode;
    slotIconSuffix?: ReactNode;
    tag?: keyof JSX.IntrinsicElements;
	verticalAlignment?: 'center' | 'end' | 'start';
}
