import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SignInForm } from '.';
import { AuthProvider } from '@arcade/library-authentication';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Authentication/SignInForm',
	component: SignInForm,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof SignInForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SignInForm> = (args) => (
	<AuthProvider>
		<SignInForm {...args} />
	</AuthProvider>
);

export const _SignInForm_ = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
_SignInForm_.args = {
	formId: 'test-form',
};
