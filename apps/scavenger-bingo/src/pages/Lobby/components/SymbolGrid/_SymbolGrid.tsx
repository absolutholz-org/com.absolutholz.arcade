import { useEffect, useState } from 'react';

import { Stack } from '@arcade/library-components/src/components/Stack';

import type { SymbolGridProps } from './_SymbolGrid.annotations';
import * as S from './_SymbolGrid.styled';
import { Symbol } from '../Symbol';
import { useGameConfig } from '../../contexts/ConfigContext';
import type { SymbolConfig } from '../../../../App.types';

export function SymbolGrid ({}: SymbolGridProps): JSX.Element {
    const { gameConfig, setGameConfig } = useGameConfig();
    const [ symbols, setSymbols ] = useState<SymbolConfig[]>([]);

    async function loadConfig (id: string) {
		const { default: config } = await import(`../../../../configs/${id}/config.json`);
		setSymbols(config.symbols);
	} 

    useEffect(() => {
		loadConfig(gameConfig.gameConfigId);
	}, [gameConfig.gameConfigId]);

    function handleSelectAll() {
		setGameConfig({ symbolIds: symbols.map(({ id }) => id) });
	}
	
	function handleDeselectAll() {
		setGameConfig({ symbolIds: [] });
	}

    return (
        <Stack direction='column' spacingY='m'>
            <>
                {
                    symbols.length > 0 &&
                    <S.SymbolGrid_List>
                        {symbols.map(({ file, id }) => (
                            <Symbol file={file} id={id} key={id} allSymbols={symbols} />
                            ))}
                    </S.SymbolGrid_List>
                }
            </>

            <Stack direction='row' spacingX='s'>
                <button
                    onClick={handleSelectAll}
                    type='button'
                >Select All</button>

                <button
                    onClick={handleDeselectAll}
                    type='button'
                >Deselect All</button>
            </Stack>
        </Stack>
    );
}
