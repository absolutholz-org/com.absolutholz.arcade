import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactNode } from 'react';

import { ConditionalWrapper } from '.';
import { LOREM_IPSUM } from '../../storyHelpers/placeholderText';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Utility Components/ConditionalWrapper',
	component: ConditionalWrapper,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof ConditionalWrapper>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ConditionalWrapper> = (args) => (
	<ConditionalWrapper {...args}>
		<>{LOREM_IPSUM}</>
	</ConditionalWrapper>
);

export const _Template_ = Template.bind({});
_Template_.storyName = 'ConditionalWrapper';
// More on args: https://storybook.js.org/docs/react/writing-stories/args
_Template_.args = {
	wrapper: (children: ReactNode) => (
		<div>
			<h4>Conditional Wrapper</h4>
			{children}
		</div>
	),
	condition: true,
};
