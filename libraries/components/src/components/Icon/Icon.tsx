import { IconProps } from './Icon.annotations';
import * as S from './Icon.styled';

export function Icon({
	icon,
	size = 'inherit',
	...props
}: IconProps): JSX.Element {
	return (
		<S.Icon $size={size} {...props}>
			{icon}
		</S.Icon>
	);
}
