import type { SvgIconComponent } from '@mui/icons-material';

export type IListItem = {
	leadingIcon?: SvgIconComponent;
	headline: String;
	supportingText?: String;
	trailingText?: String;
	trailingIcon?: SvgIconComponent;
	onClick?: () => void;
};
