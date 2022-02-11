import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

export const enum ButtonVariant {
	Filled = 'Filled',
	Ghost = 'Ghost',
	Outlined = 'Outlined',
}

export type IButtonProps<T extends ElementType> = {
	renderAs?: T;
	children: ReactNode;
	inline?: boolean;
	variant?: ButtonVariant;
} & ComponentPropsWithoutRef<T>;
