import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Billboard, BillboardHeadline } from '.';
import { LOREM_IPSUM, LOREM_IPSUM_SENTENCE } from '../../loremIpsum';
import mdx from './Billboard.mdx';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'General/Billboard',
	component: Billboard,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
	parameters: {
		docs: {
			page: mdx,
		},
	},
} as ComponentMeta<typeof Billboard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Billboard> = (args) => <Billboard {...args} />;

export const _Billboard_ = Template.bind({});
_Billboard_.storyName = 'Billboard';
_Billboard_.args = {
	children: LOREM_IPSUM,
};

export const _BillboardWithHeadline_ = Template.bind({});
_BillboardWithHeadline_.storyName = 'Billboard with Headline';
_BillboardWithHeadline_.args = {
	children: <BillboardHeadline>{LOREM_IPSUM_SENTENCE}</BillboardHeadline>,
};
