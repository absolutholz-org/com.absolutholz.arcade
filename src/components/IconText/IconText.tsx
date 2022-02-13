import * as S from './IconText.styled';
import { IIconTextProps } from './IIconText';

export function IconText({
	children,
	slotIconPrefix,
	slotIconSuffix,
	tag = 'div',
	verticalAlignment = 'center',
	...props
}: IIconTextProps): JSX.Element {
	return (
		<S.IconText as={tag} $verticalAlignment={verticalAlignment} {...props}>
			{slotIconPrefix && <S.IconWrapper>{slotIconPrefix}</S.IconWrapper>}
			<div>{children}</div>
			{slotIconSuffix && <div>{slotIconSuffix}</div>}
		</S.IconText>
	);
}
