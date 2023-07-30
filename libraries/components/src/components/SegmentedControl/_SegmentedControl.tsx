import { SegmentedControlOption } from './SegmentedControlOption';
import * as S from './_SegmentedControl.styled';
import { ISegmentedControl } from './_SegmentedControl.types';

export function SegmentedControl({
	controls,
	onClick,
}: ISegmentedControl): JSX.Element {
	const handleClick = (value: string) => {
		onClick(value);
	};

	return (
		<S.SegmentedControl>
			{controls.map(
				({ icon, isDisabled, isSelected, text, value }, index) => {
					if (icon && text) {
						return (
							<SegmentedControlOption
								icon={icon}
								isDisabled={isDisabled}
								isSelected={isSelected}
								key={index}
								onClick={() => handleClick(value)}
								text={text}
							/>
						);
					} else if (icon) {
						return (
							<SegmentedControlOption
								icon={icon}
								isDisabled={isDisabled}
								isSelected={isSelected}
								key={index}
								onClick={() => handleClick(value)}
							/>
						);
					} else if (text) {
						return (
							<SegmentedControlOption
								isDisabled={isDisabled}
								isSelected={isSelected}
								key={index}
								onClick={() => handleClick(value)}
								text={text}
							/>
						);
					}
				}
			)}
		</S.SegmentedControl>
	);
}
