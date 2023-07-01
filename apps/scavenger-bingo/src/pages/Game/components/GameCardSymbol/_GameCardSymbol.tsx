import { IMAGE_DIRECTORY } from '../../../../App.constants';
import { GameCardSymbolProps } from './_GameCardSymbol.types';

import * as S from './_GameCardSymbol.styled';
import { useGameDispatch } from '../../contexts/GameContext';
import { useGameConfig } from '../../../Lobby/contexts/ConfigContext';

export function GameCardSymbol({
	id,
	position,
	found = false,
}: GameCardSymbolProps): JSX.Element {
	const dispatch = useGameDispatch();
	const { symbols, gameConfig } = useGameConfig();

	if (!symbols || symbols.length === 0) return <></>;

	const { file } = symbols.find((symbol) => symbol.id === id)!;
    const imgSrc = `${IMAGE_DIRECTORY}${gameConfig.gameConfigId}/${file}`;

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
				src={imgSrc}
				alt={''}
			/>
			{found && <S.GameCardSymbol_FoundSymbol />}
		</S.GameCardSymbol>
	);
}
