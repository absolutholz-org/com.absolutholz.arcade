import type { SvgIconComponent } from '@mui/icons-material';

type ISegmentedControlOptionBase = {
	isDisabled?: boolean;
	isSelected?: boolean;
	onClick: () => void;
};

type ISegmentedControlOptionText = ISegmentedControlOptionBase & {
	text: string;
	icon?: never;
};

type ISegmentedControlOptionIcon = ISegmentedControlOptionBase & {
	text?: never;
	icon: SvgIconComponent;
};

type ISegmentedControlOptionTextAndIcon = ISegmentedControlOptionBase & {
	text: string;
	icon: SvgIconComponent;
};

export type ISegmentedControlOption =
	| ISegmentedControlOptionIcon
	| ISegmentedControlOptionText
	| ISegmentedControlOptionTextAndIcon;
