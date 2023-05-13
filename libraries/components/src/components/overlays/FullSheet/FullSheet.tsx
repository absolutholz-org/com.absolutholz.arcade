import * as S from './FullSheet.styled';
import { FullSheetProps } from './FullSheet.annotations';

export function FullSheet({ children, show, isModal }: FullSheetProps): JSX.Element {
	return (
		<S.FullSheet show={show} isModal={isModal}>
			{children}
		</S.FullSheet>
	);
}
