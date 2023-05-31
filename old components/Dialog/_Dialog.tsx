import Modal from '@mui/base/Modal';

import type { DialogProps } from './_Dialog.annotations';
import * as S from './_Dialog.styled';

export function Dialog({
	children,
	icon,
	shouldShow = false,
	onClose,
}: DialogProps): JSX.Element {
	const Component = icon ? S.DialogWithIcon : S.Dialog;

	return (
		<Modal open={shouldShow} onClose={onClose}>
			<Component>
				{icon && (
					<S.Dialog_IconShell>
						{/* <S.Dialog_Icon path={icon} title='icon' /> */}
					</S.Dialog_IconShell>
				)}
				<S.Dialog_Content>{children}</S.Dialog_Content>
			</Component>
		</Modal>
	);
}
