import { default as baseConfig } from '../../vite.config';

export default {
	...baseConfig,
	base: '/checkers/',
	server: {
		port: 9005,
	},
};
