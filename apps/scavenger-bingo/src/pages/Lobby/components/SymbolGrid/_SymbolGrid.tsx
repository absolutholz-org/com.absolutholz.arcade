import { useEffect, useState } from 'react';
import LibraryAddCheckRoundedIcon from '@mui/icons-material/LibraryAddCheckRounded';
import FilterNoneRoundedIcon from '@mui/icons-material/FilterNoneRounded';
import CollectionsBookmarkRoundedIcon from '@mui/icons-material/CollectionsBookmarkRounded';

import { Stack } from '@arcade/library-components/src/components/Stack';
import { Slider } from '@arcade/library-components/src/components/Slider';

import type { SymbolGridProps } from './_SymbolGrid.annotations';
import type { SymbolSize } from './_SymbolGrid.types';
import * as S from './_SymbolGrid.styled';
import { Symbol } from '../Symbol';
import { useGameConfig } from '../../../../contexts/GameConfigContext';
import { useGameSet } from '../../../../contexts/GameSetContext';
import { Typography } from '@arcade/library-components/src/components/Typography';

export function SymbolGrid({}: SymbolGridProps): JSX.Element {
	const { symbolIds, setGameConfig } = useGameConfig();
	const { symbols } = useGameSet();
	const { addCustomPreset } = useGameSet();
	const [symbolSize, setSymbolSize] = useState<SymbolSize>(0);
	const [deselectAllSymbols, setDeselectAllSymbols] = useState(false);

	function handleSelectAll(): void {
		setGameConfig({ symbolIds: symbols.map(({ id }) => id) });
	}

	function handleDeselectAll(): void {
		setDeselectAllSymbols(true);
		setGameConfig({ symbolIds: [] });
	}

	function handleSizeChange(size: number): void {
		setSymbolSize(size as SymbolSize);
	}

	function handleSavePreset(): void {
		const name = prompt('name your preset');

		if (name) {
			addCustomPreset({
				name,
				symbols: symbolIds,
			});
		}
	}

	useEffect(() => {
		if (
			!deselectAllSymbols &&
			symbols.length > 0 &&
			symbolIds.length === 0
		) {
			setGameConfig({
				symbolIds: symbols
					.filter((symbol) => symbol.variant !== true)
					.map(({ id }) => id),
			});
		} else {
			setDeselectAllSymbols(false);
		}
	}, [symbols, symbolIds]);

	return (
		<Stack direction='column' spacingY='m'>
			<S.SymbolGrid_Actions direction='row' spacingX='s'>
				<S.SymbolGrid_Action onClick={handleSelectAll}>
					<S.SymbolGrid_ActionIcon as={LibraryAddCheckRoundedIcon} />
					<Typography size='xs'>Select All</Typography>
				</S.SymbolGrid_Action>

				<S.SymbolGrid_Action onClick={handleDeselectAll}>
					<S.SymbolGrid_ActionIcon as={FilterNoneRoundedIcon} />
					<Typography size='xs'>Deselect All</Typography>
				</S.SymbolGrid_Action>

				<S.SymbolGrid_Action
					disabled={
						symbols.length === symbolIds.length ||
						symbolIds.length === 0
					}
					onClick={handleSavePreset}>
					<S.SymbolGrid_ActionIcon
						as={CollectionsBookmarkRoundedIcon}
					/>
					<Typography size='xs'>Save Selection</Typography>
				</S.SymbolGrid_Action>

				<S.SymbolGrid_SymbolSize as='label'>
					<S.SymbolGrid_Slider>
						<Slider max={2} onChange={handleSizeChange} />
					</S.SymbolGrid_Slider>
					<Typography size='xs'>Preview size</Typography>
				</S.SymbolGrid_SymbolSize>
			</S.SymbolGrid_Actions>

			<div>
				{symbols.length > 0 && (
					<S.SymbolGrid_List symbolSize={symbolSize}>
						{symbols.map(({ file, id }) => (
							<Symbol file={file} id={id} key={id} />
						))}
					</S.SymbolGrid_List>
				)}
			</div>
		</Stack>
	);
}
