import { ReactNode } from 'react';
import { IOverlay } from '../IOverlay';

export interface IDialog extends IOverlay {
	slotHeader?: ReactNode;
	slotFooter?: ReactNode;
}
