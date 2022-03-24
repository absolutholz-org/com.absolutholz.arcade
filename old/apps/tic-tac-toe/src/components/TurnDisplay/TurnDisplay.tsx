import { useEffect, useRef } from 'react';
import { useGameState } from '../../context/Game';

import * as S from './TurnDisplay.styled';

export function TurnDisplay({ ...props }): JSX.Element {
	const { currentPlayer } = useGameState();
	const refDialog = useRef<HTMLDialogElement>(null);
	const refDialogContentBackground = useRef<HTMLDivElement>(null);

	function handleAnimationEnd(event: AnimationEvent) {
		event.stopPropagation();
		// console.log(
		// 	{ event },
		// 	refDialogContentBackground.current,
		// 	event.target
		// );
		// refDialogContentBackground?.current?.removeEventListener(
		// 	'animationend',
		// 	handleAnimationEnd
		// );
		closeDialog();
	}

	function closeDialog() {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		refDialog.current.close();
	}

	useEffect(() => {
		console.log({ currentPlayer });
		if (!refDialog?.current || !refDialogContentBackground?.current) {
			return;
		}

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
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
	}, [currentPlayer]);

	return (
		<S.Dialog ref={refDialog} onClick={closeDialog}>
			<S.DialogBackground ref={refDialogContentBackground}>
				<S.Content>{currentPlayer.displayName}'s turn</S.Content>
			</S.DialogBackground>
		</S.Dialog>
	);
}
