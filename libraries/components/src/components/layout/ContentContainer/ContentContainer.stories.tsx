import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ContentContainer } from '.';
import { CONTENT_STYLES, SPACING_STYLES } from '../../../story-helpers';
import mdx from './ContentContainer.mdx';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Layout/ContentContainer',
	component: ContentContainer,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
	parameters: {
		docs: {
			page: mdx,
		},
	},
} as ComponentMeta<typeof ContentContainer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ContentContainer> = (args) => (
	<div style={SPACING_STYLES}>
		<ContentContainer {...args} />
	</div>
);

export const _BaseWidth_ = Template.bind({});
_BaseWidth_.args = {
	children: <div style={CONTENT_STYLES}>Content Area</div>,
};

export const _ExtraWide_ = Template.bind({});
_ExtraWide_.args = {
	children: <div style={CONTENT_STYLES}>Content Area</div>,
	$size: 'wide',
};

export const _FullWidth = Template.bind({});
_FullWidth.args = {
	children: <div style={CONTENT_STYLES}>Content Area</div>,
	$size: 'full',
};
