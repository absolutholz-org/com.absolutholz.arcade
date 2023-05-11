import { ResetList } from '../ResetList';
import { StackProps } from './_Stack.types';
import * as S from './_Stack.styled';

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

	return (
		<S.Stack
			as={isResettableList && shouldResetList ? ResetList : tag}
			className={className}
			$direction={direction}
			$spaceLevelX={spaceLevelX}
			$spaceLevelY={spaceLevelY}>
			{children}
		</S.Stack>
	);
}
