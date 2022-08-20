import { default as baseConfig } from '../../vite.config';

export default {
	...baseConfig,
	base: '/connect4/',
	server: {
		port: 9003,
	},
};
