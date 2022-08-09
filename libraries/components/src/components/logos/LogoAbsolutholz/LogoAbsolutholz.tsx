import React from 'react';

import * as S from './LogoAbsolutholz.styled';

export function LogoAbsolutholz({ ...restProps }): JSX.Element {
	return (
		<S.LogoAbsolutholz {...restProps}>
			<S.LogoAbsolutholzAbsolut>absolut</S.LogoAbsolutholzAbsolut>
			<S.LogoAbsolutholzHolz>holz</S.LogoAbsolutholzHolz>
		</S.LogoAbsolutholz>
	);
}
