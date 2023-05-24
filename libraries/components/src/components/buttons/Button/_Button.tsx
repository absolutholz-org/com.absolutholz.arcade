import { Link } from 'react-router-dom';

import type { ButtonProps } from './_Button.annotations';

import * as S from './_Button.styled';

export function Button({
	children,
	disabled = false,
	href,
	onClick,
	size = 's',
	to,
	type,
	variant = 'outlined',
}: ButtonProps): JSX.Element {
	if (href) {
		return (
			<S._Button
				as='a'
				// @ts-ignore
				href={href}
				$outlined={variant === 'outlined'}
				$size={size}>
				{children}
			</S._Button>
		);
	}

	if (to) {
		return (
			<S._Button
				as={Link}
				$outlined={variant === 'outlined'}
				$size={size}
				// @ts-ignore
				to={to}>
				{children}
			</S._Button>
		);
	}

	return (
		<S._Button
			disabled={disabled}
			onClick={onClick}
			$outlined={variant === 'outlined'}
			$size={size}
			type={type}>
			{children}
		</S._Button>
	);
}
