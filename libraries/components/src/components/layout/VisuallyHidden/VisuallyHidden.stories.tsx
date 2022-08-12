import { ComponentStory, ComponentMeta } from '@storybook/react';

import { VisuallyHidden } from '.';
import { LOREM_IPSUM_SENTENCE } from '../../../loremIpsum';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Layout/VisuallyHidden',
	component: VisuallyHidden,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof VisuallyHidden>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof VisuallyHidden> = (args) => (
	<VisuallyHidden {...args} />
);

export const _VisuallyHidden_ = Template.bind({});
_VisuallyHidden_.args = {
	children: LOREM_IPSUM_SENTENCE,
};
