import { addDecorator } from '@storybook/react';

import * as S from '../src/components/Global.styled';

addDecorator((story) => (
	<>
		<S.GlobalStyle />
		{story()}
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
