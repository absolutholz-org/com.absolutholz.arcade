import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HeadlineSection } from '.';
import { LOREM_IPSUM_SENTENCE } from '../../../loremIpsum';
// import mdx from './HeadlineSection.mdx';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'General/Headlines/HeadlineSection',
	component: HeadlineSection,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
	// parameters: {
	// 	docs: {
	// 		page: mdx,
	// 	},
	// },
} as ComponentMeta<typeof HeadlineSection>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeadlineSection> = (args) => (
	<HeadlineSection {...args} />
);

export const _HeadlineSection_ = Template.bind({});
_HeadlineSection_.args = {
	children: LOREM_IPSUM_SENTENCE,
};
