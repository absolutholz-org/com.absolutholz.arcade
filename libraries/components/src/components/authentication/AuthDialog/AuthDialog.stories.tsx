import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AuthDialog } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Authentication/AuthDialog',
	component: AuthDialog,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof AuthDialog>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AuthDialog> = (args) => <AuthDialog {...args} />;

export const _AuthDialog_ = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
_AuthDialog_.args = {
	show: true,
};
