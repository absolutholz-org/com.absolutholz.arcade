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
	const outlined: boolean = variant === 'outlined';

	if (href) {
		return (
			<S.Button
				as='a'
				// @ts-ignore
				href={href}
				outlined={outlined}
				size={size}>
				{text}
			</S.Button>
		);
	}

	if (to) {
		return (
			<S.Button
				as={Link}
				outlined={outlined}
				size={size}
				// @ts-ignore
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
			outlined={outlined}
			size={size}
			type={type}>
			{text}
		</S.Button>
	);
}
