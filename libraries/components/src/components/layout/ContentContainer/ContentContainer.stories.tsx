import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ContentContainer } from ".";
import { color } from "../../../foundations/colors/color";
// import { StoryExampleContent } from "../../StoryExampleContent";
// import mdx from "./ContentContainer.mdx";

const SPACING_STYLES = {
	backgroundImage:
		"repeating-linear-gradient(45deg, hsl(0 100% 50% / 0.05), hsl(0 100% 50% / 0.05) 20px, hsl(0 100% 50% / 0.25) 20px, hsl(0 100% 50% / 0.25) 40px)",
};

const CONTENT_STYLES = {
	background: color("surface"),
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Layout/ContentContainer",
	component: ContentContainer,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
	// parameters: {
	// 	docs: {
	// 		page: mdx,
	// 	},
	// },
} as ComponentMeta<typeof ContentContainer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ContentContainer> = (args) => (
	<div style={SPACING_STYLES}>
		<ContentContainer {...args} />
	</div>
);

export const _baseWidth_ = Template.bind({});
_baseWidth_.args = {
	children: <div style={CONTENT_STYLES}>Content Area</div>,
};

export const _extraWide_ = Template.bind({});
_extraWide_.args = {
	children: <div style={CONTENT_STYLES}>Content Area</div>,
	$size: "wide",
};

export const _fullWidth = Template.bind({});
_fullWidth.args = {
	children: <div style={CONTENT_STYLES}>Content Area</div>,
	$size: "full",
};
