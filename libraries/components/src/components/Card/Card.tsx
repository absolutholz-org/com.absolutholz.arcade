import { CardProps } from './Card.annotations';
import * as S from './Card.styled';

export function Card({
	children,
	tag = 'div',
	...props
}: CardProps): JSX.Element {
	return (
		<S.Card as={tag} {...props}>
			{children}
		</S.Card>
	);
}
