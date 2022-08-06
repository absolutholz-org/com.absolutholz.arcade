import styled from 'styled-components';

export const Container = styled.div`
	&:not(:empty) {
		align-items: center;
		display: flex;
		height: 100%;
		left: 0;
		justify-content: center;
		position: fixed;
		top: 0;
		width: 100%;

		&::before {
			background: hsl(0, 0%, 0%, 0.7);
			backdrop-filter: blur(5px);
			content: '';
			display: block;
			height: 100%;
			left: 0;
			position: absolute;
			top: 0;
			width: 100%;
		}
	}

	.firebaseui-container {
		background-color: #fff;
		border-radius: 2px;
		box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%),
			0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%);
		padding-top: 16px;
	}
`;
