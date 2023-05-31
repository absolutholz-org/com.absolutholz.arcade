import { Link } from 'react-router-dom';

import type { ButtonProps } from './_Button.annotations';
import * as S from './_Button.styled';

export function Button({
	size = 's',
	variant = 'outlined',
	icon,
	text,
	disabled = false,
	href,
	onClick,
	to,
	type = 'button',
}: ButtonProps): JSX.Element {
	if (href) {
		return (
			<S.Button
				as='a'
				href={href}
				outlined={variant === 'outlined'}
				size={size}>
				{text}
			</S.Button>
		);
	}

	if (to) {
		return (
			<S.Button
				as={Link}
				outlined={variant === 'outlined'}
				size={size}
				to={to}>
				{text}
			</S.Button>
		);
	}

	return (
		<S.Button
			as='button'
			disabled={disabled}
			onClick={onClick}
			outlined={variant === 'outlined'}
			size={size}
			type={type}>
			{text}
		</S.Button>
	);
}
