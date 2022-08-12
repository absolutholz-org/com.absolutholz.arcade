import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LogoTextInline } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Logos/LogoTextInline',
	component: LogoTextInline,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof LogoTextInline>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LogoTextInline> = (args) => (
	<LogoTextInline {...args} />
);

export const _Template_ = Template.bind({});
_Template_.storyName = 'LogoTextInline';
