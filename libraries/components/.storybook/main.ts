import { dirname, join } from 'path';
/** @type { import('@storybook/react-vite').StorybookConfig } */

import { mergeConfig } from 'vite';
const config = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		getAbsolutePath('@storybook/addon-links'),
		getAbsolutePath('@storybook/addon-essentials'),
		getAbsolutePath('@storybook/addon-interactions'),
		getAbsolutePath('@storybook/addon-mdx-gfm'),
		getAbsolutePath('@storybook/addon-mdx-gfm'),
	],
	framework: {
		name: getAbsolutePath('@storybook/react-vite'),
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
/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
	return dirname(require.resolve(join(value, 'package.json')));
}
