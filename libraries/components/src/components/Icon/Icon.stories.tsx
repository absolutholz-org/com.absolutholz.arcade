import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReactComponent as IconExample } from '@mdi/svg/svg/cog-outline.svg';

import { Icon } from '.';
import mdx from './Icon.mdx';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'General/Icon',
	component: Icon,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
	parameters: {
		docs: {
			page: mdx,
		},
	},
} as ComponentMeta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const _Icon_ = Template.bind({});
_Icon_.args = {
	icon: <IconExample />,
};
