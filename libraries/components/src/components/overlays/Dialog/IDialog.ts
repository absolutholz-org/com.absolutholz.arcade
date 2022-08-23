import { ReactNode } from 'react';
import { OverlayProps } from '../Overlay.annotations';

export interface IDialog extends OverlayProps {
	slotHeader?: ReactNode;
	slotFooter?: ReactNode;
}
