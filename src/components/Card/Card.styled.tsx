import styled, { css } from 'styled-components';

import { Elevation } from '../Elevation';

export const Card = styled.div<{ $isPickedUp?: boolean }>`
    ${ Elevation(1) }
    
    ${({ $isPickedUp = false }) =>
        $isPickedUp &&
        css`
            ${ Elevation(4) }
        `}
`;
