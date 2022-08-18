import { addDecorator } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';

import { GlobalStyle } from '../src/components/Global.styled';
import { SiteColorSchemeProvider } from '../src/contexts';

addDecorator(jsxDecorator);
addDecorator((story) => (
	<>
		<SiteColorSchemeProvider>
			<GlobalStyle />
			{story()}
		</SiteColorSchemeProvider>
	</>
));

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
