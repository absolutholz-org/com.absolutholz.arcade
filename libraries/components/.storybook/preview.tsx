import React from 'react';
import { Preview } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { BaseStyles } from '../src/styles/BaseStyles';
import { SiteColorSchemeProvider } from '../src/contexts/SiteColorScheme';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		options: {
			storySort: {
				order: [
					'Foundations',
					'Base Components',
					'Composite Components',
					'Utility Components',
					'*',
				],
			},
		},
	},
	decorators: [
		(Story) => (
			<MemoryRouter>
				<SiteColorSchemeProvider>
					<BaseStyles />
					<Story />
				</SiteColorSchemeProvider>
			</MemoryRouter>
		),
	],
};

export default preview;
