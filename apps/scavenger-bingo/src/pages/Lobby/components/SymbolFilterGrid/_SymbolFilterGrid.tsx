import { useEffect, useState } from 'react';

import { Typography } from '@arcade/library-components/src/components/Typography';
import { Stack } from '@arcade/library-components/src/components/Stack';
import { Button } from '@arcade/library-components/src/components/Button';

import * as S from './_SymbolFilterGrid.styled';
import { IMAGE_DIRECTORY } from '../../../../App.constants';
import { SymbolPresets } from '../SymbolPresets';
import { useGameConfig } from '../../contexts/ConfigContext';
import { CONFIGS } from '../../../../configs';

export function SymbolFilterGrid() {
	const { gameConfig, setGameConfig } = useGameConfig();
	const [ symbols, setSymbols ] = useState([]);
	
	async function loadConfig (id: string) {
		const { default: config } = await import(`../../../../configs/${id}/config.json`);
		console.log(config.symbols);
		setSymbols(config.symbols);
	} 

	function handleSymbolChange(id: string) {
		const symbolIds = gameConfig.symbolIds.includes(id)
			? gameConfig.symbolIds.filter((symbolId) => symbolId !== id)
			: [...gameConfig.symbolIds, id];
		setGameConfig({ symbolIds });
	}
	
	function handleSelectAll() {
		setGameConfig({ symbolIds: symbols.map(({ id }) => id) });
	}
	
	function handleDeselectAll() {
		setGameConfig({ symbolIds: [] });
	}

	function handlePresetSelectionChange(symbolIds: string[]) {
		setGameConfig({ symbolIds });
	}

	function handleConfigSelect(id: string) {
		setGameConfig({ gameConfigId: id});
	}

	useEffect(() => {
		loadConfig(gameConfig.gameConfigId);
	}, [ gameConfig.gameConfigId ])

	return (
		<>
			<Stack
				tag='fieldset'
			>
				<legend>...</legend>
				<Stack direction='row'>
					{ CONFIGS.map(({ id, name }) => (
						<button key={`config_${id}`} onClick={() => handleConfigSelect(id)} type='button'>{ name }</button>
					))}
				</Stack>
			</Stack>

			<SymbolPresets
				onPresetSelectionChange={handlePresetSelectionChange}
			/>

			{ symbols.length > 0 &&
				<Stack tag='fieldset' direction='column' spacingY='m'>
					<legend>
						<Typography size='l' as='div'>
							Custom selection
						</Typography>
					</legend>


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
			}
		</>
	);
}
