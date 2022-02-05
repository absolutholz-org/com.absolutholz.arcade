import styled from 'styled-components';

import { IconSize } from '../../enums/IconSize';

export const Icon = styled.svg<{ $size?: IconSize }>`
    height: ${({ $size = IconSize.Inherit }) => $size };
    width: auto;

    path:not([fill]) {
        fill: currentColor;
    }
`;
