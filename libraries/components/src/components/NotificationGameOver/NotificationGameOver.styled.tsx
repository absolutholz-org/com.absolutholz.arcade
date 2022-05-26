import styled from 'styled-components';

import SvgStar from 'mdi-react/StarOutlineIcon';

import { Icon, IconSize } from '../Icon';
import { SpacingSize, TypoSize } from '../../enums';
import { Headline300 } from '../headlines';

export const NotificationGameOver = styled.dialog`
	background: none;
	border: 0;
	overflow: hidden;

	&::backdrop {
		background: hsla(var(--primary), 0.8);
		backdrop-filter: blur(5px);
	}
`;

export const StatusFrame = styled.div`
	align-items: center;
	display: inline-flex;
	flex-direction: column;
	padding: 2rem;
	position: relative;
	text-align: center;
`;

export const StarIcon = styled(Icon).attrs({
	icon: SvgStar,
	size: IconSize.x125,
})`
	/* @keyframes grow-shrink {
		0% {
			transform: scale(1) translateY(var(--transform-y, 0%));
		}
		50% {
			transform: scale(1.25) translateY(var(--transform-y, 0%));
		}
		100% {
			transform: scale(1) translateY(var(--transform-y, 0%));
		}
	}

	animation: var(--transform-duration, 5s) linear infinite grow-shrink
		var(--transform-delay, 1s); */
	transform: translateY(var(--transform-y, 0%));
`;

export const StarIconXL = styled(StarIcon)`
	height: 4rem;
`;

export const StarIconLG = styled(StarIcon)`
	height: 3rem;
`;

export const StarIconMD = styled(StarIcon)`
	height: 2rem;
`;

export const StarIconSM = styled(StarIcon)`
	height: 1rem;
`;

export const UpperCrown = styled.div`
	align-items: end;
	display: flex;
	margin-bottom: ${SpacingSize.x100};

	${StarIconSM} {
		--transform-y: 100%;
		--transform-duration: ${Math.round(Math.random() * 1000) + 5000}ms;
		--transform-delay: ${Math.round(Math.random() * 1000) + 500}ms;
	}

	${StarIconMD} {
		--transform-y: 40%;
		--transform-duration: ${Math.round(Math.random() * 1000) + 5000}ms;
		--transform-delay: ${Math.round(Math.random() * 1000) + 500}ms;
	}

	${StarIconLG} {
		--transform-y: 10%;
		--transform-duration: ${Math.round(Math.random() * 1000) + 5000}ms;
		--transform-delay: ${Math.round(Math.random() * 1000) + 500}ms;
	}

	${StarIconXL} {
		--transform-duration: ${Math.round(Math.random() * 1000) + 5000}ms;
		--transform-delay: ${Math.round(Math.random() * 1000) + 500}ms;
	}
`;

export const LowerCrown = styled.div`
	align-items: start;
	display: flex;
	margin-top: ${SpacingSize.x100};
`;

export const Status = styled(Headline300)`
	margin-bottom: 0;
`;

export const PlayerGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: ${SpacingSize.x150};
`;

export const PlayerName = styled.span`
	font-size: ${TypoSize.x300};
`;

export const SunBurst = styled.div`
	@keyframes rotate-div {
		to {
			transform: rotate(0deg);
		}
		from {
			transform: rotate(-30deg);
		}
	}

	animation: 5000ms linear infinite rotate-div;
	background: repeating-conic-gradient(
			hsla(var(--primary), 0.25) 0 15deg,
			transparent 0 30deg
		)
		no-repeat;
	mask-image: radial-gradient(
		closest-side circle at center,
		hsla(0, 0%, 0%, 0) 2px,
		hsla(0, 0%, 0%, 0.75) 4px,
		transparent 90%
	);

	height: 100%;
	left: 0;
	position: absolute;
	top: 0;
	width: 100%;
`;

export const ButtonBar = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: var(--gutter);
	justify-content: center;
`;
