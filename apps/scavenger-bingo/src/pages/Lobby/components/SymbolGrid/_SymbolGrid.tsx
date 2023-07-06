import { useEffect, useRef, useState } from 'react';

import { Stack } from '@arcade/library-components/src/components/Stack';
import { Slider } from '@arcade/library-components/src/components/Slider';

import type { SymbolGridProps } from './_SymbolGrid.annotations';
import type { SymbolSize } from './_SymbolGrid.types';
import * as S from './_SymbolGrid.styled';
import { Symbol } from '../Symbol';
import { useGameConfig } from '../../../../contexts/GameConfigContext';
import { useGameSet } from '../../../../contexts/GameSetContext';

export function SymbolGrid ({}: SymbolGridProps): JSX.Element {
    const { symbolIds, setGameConfig } = useGameConfig();
    const { symbols } = useGameSet();
    const { addCustomPreset} = useGameSet();
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
                symbols: symbolIds,
            })
        }
    }

    useEffect(() => {
        if (symbols.length > 0 && symbolIds.length === 0) {
            setGameConfig({
                symbolIds: symbols.filter(( symbol ) => symbol.variant !== true).map(({ id }) => id),
            });
        }
    }, [symbols, symbolIds]);

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
                    disabled={symbols.length === symbolIds.length || symbolIds.length === 0}
                    onClick={handleSavePreset}
                    type='button'
                >Save Selection</button>
            </S.SymbolGrid_Actions>

            <div>
                {
                    symbols.length > 0 &&
                    <S.SymbolGrid_List symbolSize={symbolSize}>
                        {symbols.map(({ file, id }) => (
                            <Symbol file={file} id={id} key={id} />
                        ))}
                    </S.SymbolGrid_List>
                }
            </div>
        </Stack>
    );
}
