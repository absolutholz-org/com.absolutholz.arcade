import { ReactElement } from 'react';

export type IconSize = '1em' | '1.125em' | '1.25em' | '1.5em' | '2em';

export interface IconProps {
	icon: ReactElement;
	size?: IconSize;
}
