import { useEffect, useRef } from 'react';

import { INotificationTurn } from './INotificationTurn';
import * as S from './NotificationTurn.styled';

export function NotificationTurn({
	playerName,
}: INotificationTurn): JSX.Element {
	const refDialog = useRef<HTMLDialogElement>(null);
	const refDialogContentBackground = useRef<HTMLDivElement>(null);

	function handleAnimationEnd(event: AnimationEvent) {
		event.stopPropagation();
		// refDialogContentBackground?.current?.removeEventListener(
		// 	'animationend',
		// 	handleAnimationEnd
		// );
		closeDialog();
	}

	function closeDialog() {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore - TS doesn't recognize close method on HTMLDialogElement
		refDialog.current.close();
	}

	useEffect(() => {
		if (
			!refDialog?.current ||
			!refDialogContentBackground?.current ||
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore - TS doesn't recognize open method on HTMLDialogElement
			refDialog.current.open
		) {
			return;
		}

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore - TS doesn't recognize showModal method on HTMLDialogElement
		refDialog.current.showModal();

		// setTimeout(() => {
		// 	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// 	// @ts-ignore
		// 	ref.current.close();
		// }, 3000);

		refDialogContentBackground.current.addEventListener(
			'animationend',
			handleAnimationEnd,
			{
				capture: true,
				once: true,
				passive: true,
			}
		);

		return () => {
			refDialogContentBackground?.current?.removeEventListener(
				'animationend',
				handleAnimationEnd
			);
		};
	}, [playerName]);

	return (
		<S.NotificationTurn ref={refDialog} onClick={closeDialog}>
			<S.Background ref={refDialogContentBackground}>
				<S.Content>{playerName}'s turn</S.Content>
			</S.Background>
		</S.NotificationTurn>
	);
}
