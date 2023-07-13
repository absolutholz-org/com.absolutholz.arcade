import * as S from './_Button.styled';
import type { IButton } from './_Button.types';

export function Button({
	icon,
	disabled = false,
	href,
	onClick,
	width = 'content',
	text,
	to,
	type = 'button',
}: IButton): JSX.Element {
	const props = {
		fullWidth: width === 'context',
	};
	const content = (
		<>
			{icon && <S.Button_Icon as={icon} theme='filled' />}
			{text && <S.Button_Text>{text}</S.Button_Text>}
		</>
	);

	if (href) {
		return (
			<S.ButtonAsAnchor {...props} href={href}>
				{content}
			</S.ButtonAsAnchor>
		);
	}

	if (to) {
		return (
			<S.ButtonAsLink {...props} to={to}>
				{content}
			</S.ButtonAsLink>
		);
	}

	return (
		<S.Button {...props} disabled={disabled} onClick={onClick} type={type}>
			{content}
		</S.Button>
	);
}
