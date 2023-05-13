import { AuthProvider } from '@arcade/library-authentication';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SignUpForm } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Authentication/SignUpForm',
	component: SignUpForm,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof SignUpForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SignUpForm> = (args) => (
	<AuthProvider>
		<SignUpForm {...args} />
	</AuthProvider>
);

export const _SignUpForm_ = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
_SignUpForm_.args = {
	formId: 'test-form',
};
