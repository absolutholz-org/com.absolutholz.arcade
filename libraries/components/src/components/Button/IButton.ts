import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

export const enum ButtonVariant {
	Elevated = 'Elevated',
	Filled = 'Filled',
	Outlined = 'Outlined',
	Text = 'Text',
	Tonal = 'Tonal',
}

export type IButtonProps<T extends ElementType> = {
	renderAs?: T;
	children: ReactNode;
	inline?: boolean;
	type?: string;
	variant?: ButtonVariant;
} & ComponentPropsWithoutRef<T>;
