import * as S from './_SegmentedControlOption.styled';
import { ISegmentedControlOption } from './_SegmentedControlOption.types';
import CheckIcon from '@mui/icons-material/Check';

export function SegmentedControlOption({
	icon,
	isDisabled = false,
	isSelected = false,
	onClick,
	text,
}: ISegmentedControlOption): JSX.Element {
	return (
		<S.SegmentedControlOption
			aria-selected={isSelected}
			disabled={isDisabled}
			onClick={onClick}>
			{icon && <S.SegmentedControlOption_Icon as={icon} />}
			{/* {isSelected && <S.SegmentedControlOption_Icon as={CheckIcon} />}
			{!isSelected && icon && <S.SegmentedControlOption_Icon as={icon} />} */}
			{text && (
				<S.SegmentedControlOption_Text size='s' weight='medium'>
					{text}
				</S.SegmentedControlOption_Text>
			)}
		</S.SegmentedControlOption>
	);
}
