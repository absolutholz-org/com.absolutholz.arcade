import { Size } from '../../types/Size';

export type TypographyLevel = -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5;

export type TypographySize = Exclude<Size, 'xxs'> | 'xxxl' | 'xxxxl';
