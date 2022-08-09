import styled from 'styled-components';

import { SpacingSize } from '../../enums';
import { color } from '../../foundations/colors/color';
import { Headline400 } from '../headlines';

export const Billboard = styled.div`
	background-color: ${color('primary')};
	padding-block: ${SpacingSize.x300};
	position: relative;
	z-index: 0;
`;

export const BillboardHeadline = styled(Headline400)``;

export const BillboardBackground = styled.img`
	height: 100%;
	inset: 0;
	object-fit: cover;
	opacity: 0.8;
	position: absolute;
	width: 100%;
	z-index: -1;
`;
