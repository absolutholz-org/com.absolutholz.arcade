import { default as baseConfig } from '../../vite.config';

export default {
	...baseConfig,
	base: '/tictactoe/',
	server: {
		port: 9001,
	},
};
