import { IMAGE_DIRECTORY } from '../../../../App.constants';
import { GameCardSymbolProps } from './_GameCardSymbol.types';

import * as S from './_GameCardSymbol.styled';
import { useGameDispatch } from '../../contexts/GameContext';
import { useGameConfig } from '../../../../contexts/GameConfigContext';
import { useGameSet } from '../../../../contexts/GameSetContext';
import { useEffect, useState } from 'react';

export function GameCardSymbol({
	id,
	position,
	found = false,
}: GameCardSymbolProps): JSX.Element {
	const dispatch = useGameDispatch();
	const { gameSetId } = useGameConfig();
	const { symbols } = useGameSet();

	const [ imgSrc, setImgSrc ] = useState<string | undefined>();
	
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
	
	useEffect(() => {
		if (!symbols || symbols.length === 0) return;
		const { file } = symbols.find((symbol) => symbol.id === id)!;
		setImgSrc(`${IMAGE_DIRECTORY}${gameSetId}/${file}`);
	}, [symbols]);

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
