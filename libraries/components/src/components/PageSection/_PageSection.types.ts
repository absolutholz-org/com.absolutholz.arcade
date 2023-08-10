import { ReactNode } from 'react';
import { Size } from '../../types/Size';

export type OmitSpacing = 'top' | 'bottom';

export type SpacingSize = Extract<Size, 'xl'>;

export type IPageSection = {
	as?: React.ElementType<any> | undefined;
	children: ReactNode;
	omitSpacing?: OmitSpacing;
	spacingSize?: SpacingSize;
};
