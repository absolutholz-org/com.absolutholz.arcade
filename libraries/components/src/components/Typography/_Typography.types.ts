import { Size } from '../../types/Size';

export type TypographySize = Exclude<Size, 'xxs'> | 'xxxl' | 'xxxxl';
