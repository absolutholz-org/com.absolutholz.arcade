import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Dialog } from '.';
import { LOREM_IPSUM_SENTENCE } from '../../../loremIpsum';
import { ExampleContent } from '../ExampleContent';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'General/Overlays/Dialog',
	component: Dialog,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		onClose: { action: 'closed' },
	},
} as ComponentMeta<typeof Dialog>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dialog> = (args) => (
	<>
		<ExampleContent />
		<Dialog {...args}>{LOREM_IPSUM_SENTENCE}</Dialog>
	</>
);

export const _Dialog_ = Template.bind({});
_Dialog_.args = {
	show: true,
};

export const _DialogWithHeader_ = Template.bind({});
_DialogWithHeader_.args = {
	show: true,
	slotHeader: LOREM_IPSUM_SENTENCE,
};

export const _DialogWithFooter_ = Template.bind({});
_DialogWithFooter_.args = {
	show: true,
	slotFooter: LOREM_IPSUM_SENTENCE,
};
