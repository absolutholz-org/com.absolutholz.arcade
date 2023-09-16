import {
	IBreadcrumb,
	IIconBreadcrumb,
	ITextBreadcrumb,
} from './_Breadcrumb.types';
import * as S from './_Breadcrumb.styled';

export function Breadcrumb({
	href,
	isCurrentPage,
	label,
	children,
}: IBreadcrumb): JSX.Element {
	return (
		<S.Breadcrumb
			aria-current={isCurrentPage ? 'page' : undefined}
			aria-label={label}
			href={href}>
			{children}
		</S.Breadcrumb>
	);
}

export function TextBreadcrumb({
	text,
	...restProps
}: ITextBreadcrumb): JSX.Element {
	return <Breadcrumb {...restProps}>{text}</Breadcrumb>;
}

export function IconBreadcrumb({
	icon,
	...restProps
}: IIconBreadcrumb): JSX.Element {
	return <Breadcrumb {...restProps}>{icon}</Breadcrumb>;
}
