import { default as baseConfig } from '../../vite.config';

export default {
	...baseConfig,
	base: '/travelbingo/',
	server: {
		port: 9004,
	},
};
