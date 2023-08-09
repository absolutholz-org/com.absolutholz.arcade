import { ReactNode } from 'react';

import * as S from './_Stack.styled';
import { ConditionalWrapper } from '../ConditionalWrapper';
import { ResetList } from '../ResetList/_ResetList.styled';
import type { IStack } from './_Stack.types';

export function Stack({
	children,
	className,
	direction = 'column',
	shouldResetList = true,
	spacingX = 'm',
	spacingY = 's',
	tag = 'div',
}: IStack): JSX.Element {
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
				$spacingX={spacingX}
				$spacingY={spacingY}>
				{children}
			</S.Stack>
		</ConditionalWrapper>
	);
}
