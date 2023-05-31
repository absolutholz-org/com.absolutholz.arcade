import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FormFooter } from '.';
import { CONTENT_STYLES, SPACING_STYLES } from '../../../story-helpers';
import mdx from './FormFooter.mdx';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'General/Form Elements/FormFooter',
	component: FormFooter,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
	parameters: {
		docs: {
			page: mdx,
		},
	},
} as ComponentMeta<typeof FormFooter>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormFooter> = (args) => (
	<div style={SPACING_STYLES}>
		<FormFooter {...args} />
	</div>
);

export const _FormFooter_ = Template.bind({});
_FormFooter_.args = {
	children: <div style={CONTENT_STYLES}>Content Area</div>,
};
