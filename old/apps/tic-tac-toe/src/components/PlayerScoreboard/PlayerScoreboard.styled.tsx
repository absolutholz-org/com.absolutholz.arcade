import styled from 'styled-components';

import { Icon, IconSize, TypoSize } from '@arcade/components';
import { GamePieceIcon } from '../GamePieceIcon';

export const PlayerScoreboard = styled.div`
	text-align: center;
`;

export const IconWrapper = styled.div``;

export const PlayerName = styled.div`
	font-size: ${TypoSize.x150};
`;

export const Piece = styled(GamePieceIcon)`
	height: 7rem;
`;

export const CurrentPlayerIndicator = styled(Icon).attrs({
	size: IconSize.x400,
})`
	@keyframes bounce {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(-10%);
		}
	}

	animation: bounce 0.8s alternate infinite;
	/* animation-direction: alternate;
	animation-iteration-count: infinite; */

	@media (prefers-reduced-motion) {
		animation: none;
	}
`;

export const CurrentPlayerIndicatorWrapper = styled.div`
	height: ${IconSize.x400};
	margin-bottom: -1rem;
`;
