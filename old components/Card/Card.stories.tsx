import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from '.';
import { LOREM_IPSUM } from '../../loremIpsum';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'General/Card',
	component: Card,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const _Template_ = Template.bind({});
_Template_.storyName = 'Card';
// More on args: https://storybook.js.org/docs/react/writing-stories/args
_Template_.args = {
	children: LOREM_IPSUM,
};
