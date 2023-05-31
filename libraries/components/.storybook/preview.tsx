import React from 'react';
import { Preview } from '@storybook/react';

import { BaseStyles } from '../src/styles/BaseStyles';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	decorators: [
		(Story) => (
			<>
				<BaseStyles />
				<Story />
			</>
		),
	],
};

export default preview;
