import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotificationTurn } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/NotificationTurn',
	component: NotificationTurn,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof NotificationTurn>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NotificationTurn> = (args) => (
	<NotificationTurn {...args} />
);

export const _Template_ = Template.bind({});
_Template_.storyName = 'NotificationTurn';
_Template_.args = {
	playerName: 'Player 1',
};
