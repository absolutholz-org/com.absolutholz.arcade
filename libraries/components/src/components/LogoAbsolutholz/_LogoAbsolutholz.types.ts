import { Size } from '../../types/Size';

export type LogoAbsolutholzSize = Extract<Size, 's' | 'm' | 'l'>;

export type ILogoAbsolutholz = {
	relativeSize?: LogoAbsolutholzSize;
};
