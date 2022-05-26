import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { Button, ButtonVariant } from '../buttons/Button';

import { INotificationGameOverProps } from './INotificationGameOver';
import * as S from './NotificationGameOver.styled';

export function NotificationGameOver({
	winnerPlayers,
	children,
	isOpen,
	onNewGameClick,
}: INotificationGameOverProps): JSX.Element {
	const refDialog = useRef<HTMLDialogElement>(null);
	useEffect(() => {
		if (!refDialog?.current) {
			return;
		}

		if (isOpen) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			refDialog.current.showModal();
			// } else {
			// 	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// 	// @ts-ignore
			// 	refDialog.current.close();
		}
	}, [isOpen]);

	return (
		<S.NotificationGameOver ref={refDialog}>
			<S.StatusFrame>
				<S.SunBurst />

				<S.UpperCrown>
					<S.StarIconSM />
					<S.StarIconMD />
					<S.StarIconLG />
					<S.StarIconXL />
					<S.StarIconLG />
					<S.StarIconMD />
					<S.StarIconSM />
				</S.UpperCrown>
				{winnerPlayers.length === 1 && (
					<>
						<S.Status>Winner</S.Status>
						<S.PlayerName>
							{winnerPlayers[0].displayName}
						</S.PlayerName>
						{children}
					</>
				)}
				{winnerPlayers.length > 1 && (
					<>
						<S.Status>It's a draw</S.Status>
						<S.PlayerGrid>
							{winnerPlayers.map((player) => (
								<S.PlayerName>
									{player.displayName}
								</S.PlayerName>
							))}
						</S.PlayerGrid>
						{children}
					</>
				)}
				<S.LowerCrown>
					<S.StarIconSM />
					<S.StarIconMD />
					<S.StarIconLG />
					<S.StarIconMD />
					<S.StarIconSM />
				</S.LowerCrown>
			</S.StatusFrame>
			<S.ButtonBar>
				<Button inline={true} onClick={onNewGameClick}>
					Play again
				</Button>
				<Button
					inline={true}
					renderAs={Link}
					to='/'
					variant={ButtonVariant.Text}>
					Home
				</Button>
			</S.ButtonBar>
		</S.NotificationGameOver>
	);
}
