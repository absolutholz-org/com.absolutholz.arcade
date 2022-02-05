import { FunctionComponent } from 'react';

import { IconSize } from '../../enums/IconSize';

export interface IIconProps {
    children: FunctionComponent;
    size?: IconSize;
}
