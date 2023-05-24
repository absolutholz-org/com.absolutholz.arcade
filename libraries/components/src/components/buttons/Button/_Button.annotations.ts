import { ReactNode } from 'react';

import { ButtonSize, ButtonType, ButtonVariant } from './_Button.types';

type ButtonPropsBase = {
	children: ReactNode;
	size?: ButtonSize;
	variant?: ButtonVariant;
	onClick?: () => void;
};

type ButtonPropsAsButton = ButtonPropsBase & {
	disabled?: boolean;
	href?: never;
	to?: never;
	type?: ButtonType;
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
