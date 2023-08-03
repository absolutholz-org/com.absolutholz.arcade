import styled from '@emotion/styled';
import { color } from '../Theme';
import { css } from '@emotion/react';

export const List = styled.div<{ isDivided?: boolean }>`
	${({ isDivided = false }) =>
		isDivided &&
		css`
			> * {
				border-bottom: 1px solid ${color('secondary')};

				&:last-child {
					border: 0;
				}
			}
		`}
`;
