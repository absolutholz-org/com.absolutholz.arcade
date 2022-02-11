import { IconSize } from '../../enums/IconSize';

import { IIconProps } from './IIcon';
import * as S from './Icon.styled';

export function Icon({
	children,
	size = IconSize.Inherit,
	...props
}: IIconProps): JSX.Element {
	return <S.Icon as={children} $size={size} {...props} />;
}
