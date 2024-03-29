import { Size } from '../../types/Size';

export type TypographySize = Exclude<Size, 'xxs'> | 'xxxl' | 'xxxxl';

export type TypographyWeight = 'light' | 'regular' | 'medium' | 'heavy';

export type ITypography = {
	size?: TypographySize;
	weight?: TypographyWeight;
};
