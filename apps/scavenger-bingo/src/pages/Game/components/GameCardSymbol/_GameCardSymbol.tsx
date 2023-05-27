import { IMAGE_DIRECTORY } from '../../../../App.constants';
import { GameCardSymbolProps } from './_GameCardSymbol.types';
import symbols from '../../../../configs/germany-road-signs/symbols.json';

import * as S from './_GameCardSymbol.styled';
import { useGameDispatch, useGameState } from '../../contexts/GameContext';

export function GameCardSymbol({
	id,
	position,
	found = false,
}: GameCardSymbolProps): JSX.Element {
	const dispatch = useGameDispatch();
	const state = useGameState();
	const { file } = symbols.find((symbol) => symbol.id === id)!;

	const handleClick = () => {
		if (!found) {
			dispatch({
				type: 'MARK_SYMBOL_AS_FOUND',
				payload: {
					position,
				},
			});
		}
	};

	return (
		<S.GameCardSymbol disabled={found} onClick={handleClick} type='button'>
			<S.GameCardSymbol_Symbol
				src={`${IMAGE_DIRECTORY}germany-road-signs/${file}`}
				alt={''}
			/>
			{found && <S.GameCardSymbol_FoundSymbol />}
		</S.GameCardSymbol>
	);
}
