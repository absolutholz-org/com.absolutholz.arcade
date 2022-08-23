import { IBottomSheet } from './BottomSheet.annotations';
import * as S from './BottomSheet.styled';

export function BottomSheet({ children, show, isModal }: IBottomSheet): JSX.Element {
	return (
		<S.BottomSheet show={show} isModal={isModal}>
			{children}
		</S.BottomSheet>
	);
}
