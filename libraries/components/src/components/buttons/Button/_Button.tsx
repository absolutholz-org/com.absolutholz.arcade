import { Link } from 'react-router-dom';

import type { ButtonProps } from './_Button.annotations';

import * as S from './_Button.styled';

export function Button({
	children,
	disabled = false,
	href,
	onClick,
	to,
	type,
}: ButtonProps): JSX.Element {
	if (href) {
		return (
			// @ts-ignore
			<S._Button as='a' href={href}>
				{children}
			</S._Button>
		);
	}

	if (to) {
		return (
			// @ts-ignore
			<S._Button as={Link} to={to}>
				{children}
			</S._Button>
		);
	}

	return (
		<S._Button disabled={disabled} onClick={onClick} type={type}>
			{children}
		</S._Button>
	);
}
