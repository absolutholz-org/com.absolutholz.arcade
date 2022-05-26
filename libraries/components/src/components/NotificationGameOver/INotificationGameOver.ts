import { ReactNode } from 'react';
import { IDotsAndBoxesPlayer } from '../../../../../apps/dotsandboxes/src/dataModels';

export interface INotificationGameOverProps {
	winnerPlayers: IDotsAndBoxesPlayer[];
	children?: ReactNode;
	isOpen: boolean;
	onNewGameClick: () => void;
}
