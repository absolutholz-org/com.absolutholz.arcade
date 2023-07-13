import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { LinkProps } from 'react-router-dom';
import { SvgIconComponent } from '@mui/icons-material';

type ButtonWidth = 'content' | 'context';

type ButtonType = 'button' | 'submit' | 'reset';

type IButtonBase = {
	icon?: SvgIconComponent;
	text?: string;
	width?: ButtonWidth;
};

type IButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> &
	IButtonBase & {
		disabled?: boolean;
		href?: never;
		onClick?: () => void;
		to?: never;
		type?: ButtonType;
	};

type IButtonAsAnchor = AnchorHTMLAttributes<HTMLAnchorElement> &
	IButtonBase & {
		disabled?: never;
		href: string;
		onClick?: never;
		to?: never;
		type?: never;
	};

type IButtonAsLink = LinkProps &
	IButtonBase & {
		disabled?: never;
		href?: never;
		onClick?: never;
		to: string;
		type?: never;
	};

export type IButton = IButtonAsAnchor | IButtonAsButton | IButtonAsLink;
