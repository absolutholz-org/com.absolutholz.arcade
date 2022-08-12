import { ReactElement } from 'react';

export type IconSize = 'inherit' | '1.125em' | '1.5em' | '2em';

export interface IconProps {
	icon: ReactElement;
	size?: IconSize;
}
