import { ReactNode } from 'react';

import { ButtonSize, ButtonType, ButtonVariant } from './_Button.types';

type ButtonPropsBase = {
	icon?: string;
	size?: ButtonSize;
	text: ReactNode;
	variant?: ButtonVariant;
};

type ButtonPropsAsButton = ButtonPropsBase & {
	disabled?: boolean;
	href?: never;
	onClick?: () => void;
	to?: never;
	type?: ButtonType;
};

type ButtonPropsAsAnchor = ButtonPropsBase & {
	disabled?: never;
	href: string;
	onClick?: never;
	to?: never;
	type?: never;
};

type ButtonPropsAsLink = ButtonPropsBase & {
	disabled?: never;
	href?: never;
	onClick?: never;
	to: string;
	type?: never;
};

export type ButtonProps =
	| ButtonPropsAsAnchor
	| ButtonPropsAsButton
	| ButtonPropsAsLink;
