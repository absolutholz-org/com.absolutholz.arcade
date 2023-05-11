import { default as baseConfig } from '../../vite.config';

export default {
	...baseConfig,
	base: '/dotsandboxes/',
	server: {
		port: 9002,
	},
};
