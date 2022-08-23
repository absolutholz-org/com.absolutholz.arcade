import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FullSheet } from '.';
import { LOREM_IPSUM } from '../../../loremIpsum';
import { ExampleContent } from '../ExampleContent';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'General/Overlays/FullSheet',
	component: FullSheet,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof FullSheet>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FullSheet> = (args) => (
	<>
		<ExampleContent />
		<FullSheet {...args}>${LOREM_IPSUM}</FullSheet>
	</>
);

export const _FullSheet_ = Template.bind({});
_FullSheet_.storyName = 'FullSheet';
_FullSheet_.args = {
	show: true,
};
