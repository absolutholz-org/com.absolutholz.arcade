import * as S from './FreeSpaceSymbol.styled';

export function FreeSpaceSymbol(): JSX.Element {
	return (
		<S.FreeSpaceSymbol>
			<S.FreeSpaceSymbol_FoundSymbol />
			<S.FreeSpaceSymbol_FreeText>
				Free
				<br />
				Space
			</S.FreeSpaceSymbol_FreeText>
		</S.FreeSpaceSymbol>
	);
}
