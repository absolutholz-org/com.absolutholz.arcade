import { ReactNode } from 'react';

type ButtonPropsBase = {
	children: ReactNode;
	onClick?: () => void;
};

type ButtonPropsAsButton = ButtonPropsBase & {
	disabled?: boolean;
	href?: never;
	to?: never;
	type?: 'button' | 'submit' | 'reset';
};

type ButtonPropsAsAnchor = ButtonPropsBase & {
	disabled?: never;
	href: string;
	to?: never;
	type?: never;
};

type ButtonPropsAsLink = ButtonPropsBase & {
	disabled?: never;
	href?: never;
	to: string;
	type?: never;
};

export type ButtonProps =
	| ButtonPropsAsAnchor
	| ButtonPropsAsButton
	| ButtonPropsAsLink;
