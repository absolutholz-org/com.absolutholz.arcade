import { ComponentStory, ComponentMeta } from '@storybook/react';

import { VerticallyPaddedContainer } from '.';
import { CONTENT_STYLES, SPACING_STYLES } from '../../../story-helpers';
import mdx from './VerticallyPaddedContainer.mdx';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Layout/VerticallyPaddedContainer',
	component: VerticallyPaddedContainer,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		spacing: { control: 'radio', options: [25, 50, 100, 125, 150, 200] },
	},
	parameters: {
		docs: {
			page: mdx,
		},
	},
} as ComponentMeta<typeof VerticallyPaddedContainer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof VerticallyPaddedContainer> = (args) => (
	<div style={SPACING_STYLES}>
		<VerticallyPaddedContainer {...args} />
	</div>
);

export const _VerticallyPaddedContainer_ = Template.bind({});
_VerticallyPaddedContainer_.args = {
	children: <div style={CONTENT_STYLES}>Content Area</div>,
	spacing: 100,
};
