import * as S from './FreeSpaceSymbol.styled';

export function FreeSpaceSymbol(): JSX.Element {
	return (
		<S.FreeSpaceSymbol>
			<S.FreeSpaceSymbol_FoundSymbol />
			<S.FreeSpaceSymbol_FreeText>
				FREE
				<br />
				SPACE
			</S.FreeSpaceSymbol_FreeText>
		</S.FreeSpaceSymbol>
	);
}
