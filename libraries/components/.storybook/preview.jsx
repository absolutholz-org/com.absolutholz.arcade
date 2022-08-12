import { addDecorator } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";

import { GlobalStyle } from "../src/components/Global.styled";

addDecorator(jsxDecorator);
addDecorator((story) => (
	<>
		<GlobalStyle />
		{story()}
	</>
));

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
