import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HeadlineSubsection } from '.';
import { LOREM_IPSUM_SENTENCE } from '../../../loremIpsum';
// import mdx from './HeadlineSubsection.mdx';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'General/Headlines/HeadlineSubsection',
	component: HeadlineSubsection,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
	// parameters: {
	// 	docs: {
	// 		page: mdx,
	// 	},
	// },
} as ComponentMeta<typeof HeadlineSubsection>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeadlineSubsection> = (args) => (
	<HeadlineSubsection {...args} />
);

export const _HeadlineSubsection_ = Template.bind({});
_HeadlineSubsection_.args = {
	children: LOREM_IPSUM_SENTENCE,
};
