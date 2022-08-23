import { ReactComponent as SvgClose } from '@mdi/svg/svg/close.svg';

import { IDialog } from './IDialog';
import * as S from './Dialog.styled';
import { Icon } from '../../Icon';

export function Dialog({ children, slotHeader, slotFooter, show, isModal, onClose }: IDialog): JSX.Element {
	return (
		<S.Dialog show={show} isModal={isModal} onClose={onClose}>
			<S.CloseButton onClick={onClose} type='button'>
				<Icon icon={<SvgClose />} />
			</S.CloseButton>
			{slotHeader && <S.Header>{slotHeader}</S.Header>}
			{children}
			{slotFooter && <S.Footer>{slotFooter}</S.Footer>}
		</S.Dialog>
	);
}
