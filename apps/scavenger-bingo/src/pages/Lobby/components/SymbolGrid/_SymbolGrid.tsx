import { useRef, useState } from 'react';

import { Stack } from '@arcade/library-components/src/components/Stack';
import { Slider } from '@arcade/library-components/src/components/Slider';

import type { SymbolGridProps } from './_SymbolGrid.annotations';
import type { SymbolSize } from './_SymbolGrid.types';
import * as S from './_SymbolGrid.styled';
import { Symbol } from '../Symbol';
import { useGameConfig } from '../../../../contexts/ConfigContext';

export function SymbolGrid ({}: SymbolGridProps): JSX.Element {
    const { symbols, setGameConfig } = useGameConfig();
    const [ symbolSize, setSymbolSize ] = useState<SymbolSize>(0);

    function handleSelectAll() {
		setGameConfig({ symbolIds: symbols.map(({ id }) => id) });
	}
	
	function handleDeselectAll() {
		setGameConfig({ symbolIds: [] });
	}

    function handleSizeChange(size: number) {
        setSymbolSize(size as SymbolSize)
    }

    return (
        <Stack direction='column' spacingY='m'>
            <S.SymbolGrid_SymbolSize>
                <span>Preview size: </span>
                <Slider max={2} onChange={handleSizeChange} />
            </S.SymbolGrid_SymbolSize>

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
