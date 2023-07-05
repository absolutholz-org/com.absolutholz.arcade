import { useRef, useState } from 'react';

import { Stack } from '@arcade/library-components/src/components/Stack';
import { Slider } from '@arcade/library-components/src/components/Slider';

import type { SymbolGridProps } from './_SymbolGrid.annotations';
import type { SymbolSize } from './_SymbolGrid.types';
import * as S from './_SymbolGrid.styled';
import { Symbol } from '../Symbol';
import { useGameConfig } from '../../../../contexts/ConfigContext';
import { useSetConfig } from '../../../../contexts/SetContext/_SetContext';

export function SymbolGrid ({}: SymbolGridProps): JSX.Element {
    const { symbols, gameConfig, setGameConfig } = useGameConfig();
    const { addCustomPreset} = useSetConfig();
    const [ symbolSize, setSymbolSize ] = useState<SymbolSize>(0);

    function handleSelectAll(): void {
		setGameConfig({ symbolIds: symbols.map(({ id }) => id) });
	}
	
	function handleDeselectAll(): void {
		setGameConfig({ symbolIds: [] });
	}

    function handleSizeChange(size: number): void {
        setSymbolSize(size as SymbolSize)
    }

    function handleSavePreset (): void {
        const name = prompt('name your preset');

        if (name) {
            addCustomPreset({
                name,
                symbols: gameConfig.symbolIds,
            })
        }
    }

    return (
        <Stack direction='column' spacingY='m'>
            <S.SymbolGrid_SymbolSize>
                <span>Preview size: </span>
                <Slider max={2} onChange={handleSizeChange} />
            </S.SymbolGrid_SymbolSize>

            <S.SymbolGrid_Actions direction='row' spacingX='s'>
                <button
                    onClick={handleSelectAll}
                    type='button'
                >Select All</button>

                <button
                    onClick={handleDeselectAll}
                    type='button'
                >Deselect All</button>

                <button
                    disabled={symbols.length === gameConfig.symbolIds.length || gameConfig.symbolIds.length === 0}
                    onClick={handleSavePreset}
                    type='button'
                >Save Selection</button>
            </S.SymbolGrid_Actions>

            <div>
                {
                    symbols.length > 0 &&
                    <S.SymbolGrid_List symbolSize={symbolSize}>
                        {symbols.map(({ file, id }) => (
                            <Symbol file={file} id={id} key={id} allSymbols={symbols} />
                        ))}
                    </S.SymbolGrid_List>
                }
            </div>
        </Stack>
    );
}
