import * as S from './FoundSymbol.styled';
import type { FoundSymbolProps } from './FoundSymbolProps.types';

export function FoundSymbol({ className }: FoundSymbolProps): JSX.Element {
	return (
		<S.FoundSymbol
			className={className}
			height='24'
			viewBox='0 0 24 24'
			width='24'>
			<path
				d='M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z'
				fill='currentColor'
			/>
		</S.FoundSymbol>
	);
}
