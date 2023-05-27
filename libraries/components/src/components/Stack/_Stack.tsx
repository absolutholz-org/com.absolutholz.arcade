import { ReactNode } from 'react';

import { ResetList } from '../ResetList';
import { StackProps } from './_Stack.types';
import * as S from './_Stack.styled';
import { ConditionalWrapper } from '../ConditionalWrapper';

export function Stack({
	children,
	className,
	direction = 'column',
	shouldResetList = true,
	spaceLevelX,
	spaceLevelY,
	tag = 'div',
}: StackProps): JSX.Element {
	const isResettableList = tag === 'ol' || tag === 'ul' || tag === 'menu';

	const as = tag === 'fieldset' ? 'div' : tag;

	return (
		<ConditionalWrapper
			condition={tag === 'fieldset'}
			wrapper={(children: ReactNode) => <fieldset>{children}</fieldset>}>
			<S.Stack
				as={isResettableList && shouldResetList ? ResetList : as}
				className={className}
				$direction={direction}
				$spaceLevelX={spaceLevelX}
				$spaceLevelY={spaceLevelY}>
				{children}
			</S.Stack>
		</ConditionalWrapper>
	);
}
