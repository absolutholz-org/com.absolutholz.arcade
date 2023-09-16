import { Children } from 'react';

import { IResetList } from './_ResetList.types';
import * as S from './_ResetList.styled';

export function ResetList({
	children,
	tag = 'ul',
	...restProps
}: IResetList): JSX.Element {
	return (
		<S.ResetList as={tag} role='list' {...restProps}>
			{Children.map(children, (child, index) => (
				<li key={`listitem_${index}`}>{child}</li>
			))}
		</S.ResetList>
	);
}
