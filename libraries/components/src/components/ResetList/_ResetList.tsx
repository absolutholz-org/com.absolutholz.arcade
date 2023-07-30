import { Children } from 'react';

import { IResetList } from './_ResetList.types';
import * as S from './_ResetList.styled';

export function ResetList({
	children,
	className,
	tag,
}: IResetList): JSX.Element {
	return (
		<S.ResetList as={tag} className={className} role='list'>
			{Children.map(children, (child, index) => (
				<li key={`listitem_${index}`}>{child}</li>
			))}
		</S.ResetList>
	);
}
