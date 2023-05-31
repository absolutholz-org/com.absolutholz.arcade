import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonGroup } from '.';
import { Button } from '@arcade/library-components/src/components/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'General/ButtonGroup',
	component: ButtonGroup,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof ButtonGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonGroup> = (args) => (
	<ButtonGroup {...args}>
		<Button>Button 1</Button>
		<Button>Button 2</Button>
	</ButtonGroup>
);

export const _ButtonGroup_ = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
_ButtonGroup_.args = {};
