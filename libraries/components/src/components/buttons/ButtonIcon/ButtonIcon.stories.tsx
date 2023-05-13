import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReactComponent as IconExample } from '@mdi/svg/svg/cog-outline.svg';

import { ButtonIcon } from '.';
import { Icon } from '../../Icon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'General/ButtonIcon',
	component: ButtonIcon,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof ButtonIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonIcon> = (args) => (
	<ButtonIcon {...args}>
		<Icon icon={<IconExample />} size={'1.125em'} />
	</ButtonIcon>
);

export const _Template_ = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
_Template_.storyName = 'ButtonIcon';
