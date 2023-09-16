import { ReactElement, ReactNode } from 'react';

type TextBreadcrumb = {
	href: string;
	text: string;
	label?: string;
	icon?: never;
};

type IconBreadcrumb = {
	href: string;
	label: string;
	icon: ReactElement;
	text?: never;
};

export type Breadcrumb = TextBreadcrumb | IconBreadcrumb;

export type ITextBreadcrumb = TextBreadcrumb & {
	isCurrentPage?: boolean;
};

export type IIconBreadcrumb = IconBreadcrumb & {
	isCurrentPage?: boolean;
};

export type IBreadcrumb = {
	children: ReactNode;
	href: string;
	label?: string;

	isCurrentPage?: boolean;
};
