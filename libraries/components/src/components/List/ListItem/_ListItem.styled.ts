import styled from '@emotion/styled';

import { space } from '../../../foundations/spacing/space';
import { Typography } from '../../Typography';
import { color } from '../../Theme';

export const ListItem = styled.div`
	align-items: center;
	display: flex;
	padding: ${space('xxs')} ${space('s')} ${space('xxs')} ${space('xs')};
`;

export const ListItem_MainElement = styled.div`
	flex-grow: 1;
`;

export const ListItem_LeadingElement = styled.div`
	display: flex;
	margin-right: ${space('xs')};
`;

export const ListItem_TrailingElement = styled.div`
	display: flex;
	margin-left: ${space('xs')};
	text-align: right;
`;

export const ListItem_LeadingIcon = styled.div`
	color: ${color('secondary')};
`;

export const ListItem_Headline = styled(Typography)``;

export const ListItem_SupportingText = styled(Typography)`
	color: ${color('secondary')};
`;

export const ListItem_TrailingText = styled(Typography)`
	color: ${color('secondary')};
`;

export const ListItem_TrailingIcon = styled.div`
	color: ${color('secondary')};
`;
