import Icon from '@mdi/react';
import type { DialogProps } from './_Dialog.annotations';
import * as S from './_Dialog.styled';

export function Dialog({
	children,
	icon,
	iconEffect,
	shouldShow = false,
	onClose,
}: DialogProps): JSX.Element {
	const Component = icon ? S.DialogWithIcon : S.Dialog;

	return (
		<S.Modal
			open={shouldShow}
			onClose={onClose}
			slots={{ backdrop: S.Modal_Backdrop }}>
			<Component>
				{icon && (
					<S.Dialog_IconShell>
						{iconEffect && (
							<S.Dialog_IconEffect>
								{iconEffect}
							</S.Dialog_IconEffect>
						)}
						<Icon path={icon} />
					</S.Dialog_IconShell>
				)}
				<S.Dialog_Content>{children}</S.Dialog_Content>
			</Component>
		</S.Modal>
	);
}
