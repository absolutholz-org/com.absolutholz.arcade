import { IMAGE_DIRECTORY } from '../../../../App.constants';
import { GameCardSymbolProps } from './_GameCardSymbol.annotations';
import symbols from '../../../../configs/germany/symbols.json';

import * as S from './_GameCardSymbol.styled';
import { useGameDispatch, useGameState } from '../../contexts/GameContext';

export function GameCardSymbol({
	id,
	position,
	found = false,
}: GameCardSymbolProps): JSX.Element {
	const dispatch = useGameDispatch();
	const state = useGameState();
	const { filename } = symbols.find((symbol) => symbol.id === id)!;
	console.log({ state });
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
				src={`${IMAGE_DIRECTORY}germany/${filename}`}
				alt={''}
			/>
			{found && (
				<S.GameCardSymbol_Check
					width='24'
					height='24'
					viewBox='0 0 24 24'>
					<path
						d='M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z'
						fill='currentColor'
					/>
				</S.GameCardSymbol_Check>
			)}
		</S.GameCardSymbol>
	);
}
