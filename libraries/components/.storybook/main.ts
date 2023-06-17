/** @type { import('@storybook/react-vite').StorybookConfig } */

import { mergeConfig } from 'vite';

const config = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-mdx-gfm',
	],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	core: {},
	async viteFinal(config) {
		// Merge custom configuration into the default config
		return mergeConfig(config, {
			// Add dependencies to pre-optimization
			optimizeDeps: {
				include: ['storybook-dark-mode'],
			},
		});
	},
};
export default config;
