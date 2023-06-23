import { Typography } from '@arcade/library-components/src/components/Typography';
import { Stack } from '@arcade/library-components/src/components/Stack';
import { Button } from '@arcade/library-components/src/components/Button';

import * as S from './_SymbolFilterGrid.styled';
import { IMAGE_DIRECTORY } from '../../../../App.constants';
import { default as ALL_SYMBOLS } from '../../../../configs/germany-road-signs/symbols.json';
import { SymbolPresets } from '../SymbolPresets';
import { useGameConfig } from '../../contexts/ConfigContext';

export function SymbolFilterGrid() {
	const { gameConfig, setGameConfig } = useGameConfig();

	function handleSymbolChange(id: string) {
		const symbolIds = gameConfig.symbolIds.includes(id)
			? gameConfig.symbolIds.filter((symbolId) => symbolId !== id)
			: [...gameConfig.symbolIds, id];
		setGameConfig({ symbolIds });
	}
	
	function handleSelectAll() {
		setGameConfig({ symbolIds: ALL_SYMBOLS.map(({ id }) => id) });
	}
	
	function handleDeselectAll() {
		setGameConfig({ symbolIds: [] });
	}

	function handlePresetSelectionChange(symbolIds: string[]) {
		setGameConfig({ symbolIds });
	}

	return (
		<>
			<SymbolPresets
				onPresetSelectionChange={handlePresetSelectionChange}
			/>

			<Stack tag='fieldset' direction='column' spacingY='m'>
				<legend>
					<Typography size='l' as='div'>
						Custom selection
					</Typography>
				</legend>

				<S.SymbolFilterGrid_List>
					{ALL_SYMBOLS.map(({ file, id }) => (
						<S.SymbolFilterGrid_Label
							htmlFor={`symbol_${id}`}
							key={`symbol_${id}`}>
							<S.SymbolFilterGrid_Input
								id={`symbol_${id}`}
								checked={gameConfig.symbolIds.includes(id)}
								name={`symbol_${id}`}
								onChange={() => handleSymbolChange(id)}
								type='checkbox'
							/>
							<S.SymbolFilterGrid_Image
								alt={id}
								height={50}
								loading='lazy'
								src={`${IMAGE_DIRECTORY}germany-road-signs/${file}`}
								width={50}
							/>
						</S.SymbolFilterGrid_Label>
					))}
				</S.SymbolFilterGrid_List>

				<Stack direction='row' spacingX='s'>
					<Button
						onClick={handleSelectAll}
						type='button'
						text='Select All'
					/>
					<Button
						onClick={handleDeselectAll}
						type='button'
						text='Deselect All'
					/>
				</Stack>
			</Stack>
		</>
	);
}
