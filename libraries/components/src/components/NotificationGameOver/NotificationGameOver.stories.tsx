import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotificationGameOver } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/NotificationGameOver',
	component: NotificationGameOver,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof NotificationGameOver>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NotificationGameOver> = (args) => (
	<NotificationGameOver {...args} />
);

export const _SingleWinner_ = Template.bind({});
_SingleWinner_.storyName = 'SingleWinner';
_SingleWinner_.args = {
	isOpen: true,
	winnerPlayers: [
		{
			displayName: 'Player 1',
			color: 'red',
			uuid: '123456',
			gameLineCount: 30,
			gameBoxCount: 10,
		},
	],
};

export const _MultipleWinners_ = Template.bind({});
_MultipleWinners_.storyName = 'MultipleWinners';
_MultipleWinners_.args = {
	isOpen: true,
	winnerPlayers: [
		{
			displayName: 'Player 1',
			color: 'red',
			uuid: '123456',
			gameLineCount: 15,
			gameBoxCount: 5,
		},
		{
			displayName: 'Player 2',
			color: 'blue',
			uuid: '654321',
			gameLineCount: 15,
			gameBoxCount: 5,
		},
	],
};
