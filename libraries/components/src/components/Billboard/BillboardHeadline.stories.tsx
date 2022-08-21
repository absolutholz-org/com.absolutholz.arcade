import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BillboardHeadline } from '.';
import { LOREM_IPSUM_SENTENCE } from '../../loremIpsum';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'General/Billboard/BillboardHeadline',
	component: BillboardHeadline,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof BillboardHeadline>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BillboardHeadline> = (args) => <BillboardHeadline {...args} />;

export const _BillboardHeadline_ = Template.bind({});
_BillboardHeadline_.storyName = 'BillboardHeadline';
_BillboardHeadline_.args = {
	children: LOREM_IPSUM_SENTENCE,
};
