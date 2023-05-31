import { AuthProvider } from '@arcade/library-authentication';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ForgottenPasswordForm } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Authentication/ForgottenPasswordForm',
	component: ForgottenPasswordForm,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof ForgottenPasswordForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ForgottenPasswordForm> = (args) => (
	<AuthProvider>
		<ForgottenPasswordForm {...args} />
	</AuthProvider>
);

export const _ForgottenPasswordForm_ = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
_ForgottenPasswordForm_.args = {
	formId: 'test-form',
};
