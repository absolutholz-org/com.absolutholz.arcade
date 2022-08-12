import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from '.';
import { LOREM_IPSUM } from '../../loremIpsum';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'General/Theme',
	component: Theme,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
	// parameters: {
	// 	docs: {
	// 		page: mdx,
	// 	},
	// },
} as ComponentMeta<typeof Theme>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Theme> = (args) => <Theme {...args} />;

export const _Base_ = Template.bind({});
_Base_.args = {
	children: LOREM_IPSUM,
};

export const _Alt_ = Template.bind({});
_Alt_.args = {
	children: LOREM_IPSUM,
	$theme: 'alt',
};

export const _Image_ = Template.bind({});
_Image_.args = {
	children: LOREM_IPSUM,
	$theme: 'image',
};
