import { ReactNode } from 'react';
import { ColorScheme } from '../../enums';

export interface IColorSchemeToggler {
	children: ReactNode;
	onSchemeChange: (scheme: ColorScheme) => void;
}
