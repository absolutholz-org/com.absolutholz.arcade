import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Collapsible } from '.';
import { LOREM_IPSUM, LOREM_IPSUM_SENTENCE } from '../../loremIpsum';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'General/Collapsible',
	component: Collapsible,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		state: {
			options: ['collapsed', 'expanded'],
			control: { type: 'radio' },
		},
		onCollapse: { action: 'collapsed' },
		onExpand: { action: 'expanded' },
	},
} as ComponentMeta<typeof Collapsible>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Collapsible> = (args) => <Collapsible {...args} />;

export const _Template_ = Template.bind({});
_Template_.storyName = 'Collapsible';
// More on args: https://storybook.js.org/docs/react/writing-stories/args
_Template_.args = {
	children: LOREM_IPSUM,
	slotSummary: LOREM_IPSUM_SENTENCE,
	state: 'expanded',
};
