import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

export type ButtonVariant =
	| 'elevated'
	| 'filled'
	| 'outlined'
	| 'text'
	| 'tonal';

export type ButtonProps<T extends ElementType> = {
	renderAs?: T;
	children: ReactNode;
	inline?: boolean;
	type?: string;
	variant?: ButtonVariant;
} & ComponentPropsWithoutRef<T>;
