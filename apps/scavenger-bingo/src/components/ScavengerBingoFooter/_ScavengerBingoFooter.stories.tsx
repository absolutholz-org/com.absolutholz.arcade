import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { ScavengerBingoFooter } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'General/ScavengerBingoFooter',
	component: ScavengerBingoFooter,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof ScavengerBingoFooter>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ScavengerBingoFooter> = (args) => (
	<BrowserRouter>
		<ScavengerBingoFooter {...args} />
	</BrowserRouter>
);

export const _ScavengerBingoFooter_ = Template.bind({});
_ScavengerBingoFooter_.args = {};
