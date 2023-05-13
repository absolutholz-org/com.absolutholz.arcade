const svgrPlugin = require("vite-plugin-svgr");

module.exports = {
	async viteFinal(config, { configType }) {
		// customize the Vite config here
		config.plugins = [
			...config.plugins,
			// The key was `.default() found in the comments
			// https://blog.devgenius.io/react-vite-tailwind-css-twin-macro-storybook-svg-imports-as-react-component-6b44d5e2641
			svgrPlugin({
				svgrOptions: {
					icon: true,
				},
			}),
		];

		// return the customized config
		return config;
	},
	stories: [
		"../src/**/*.stories.mdx",
		"../src/**/*.stories.@(js|jsx|ts|tsx)",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"storybook-addon-jsx",
		"storybook-dark-mode",
	],
	framework: "@storybook/react",
	core: {
		builder: "@storybook/builder-vite",
		disableTelemetry: true,
	},
	features: {
		storyStoreV7: false, // @storybook/client-api:clientApi.addDecorator was removed in storyStoreV7.
	},
};
