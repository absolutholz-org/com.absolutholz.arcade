import { Stack } from '@arcade/library-components/src/components/Stack';

import type { SymbolGridProps } from './_SymbolGrid.annotations';
import * as S from './_SymbolGrid.styled';
import { Symbol } from '../Symbol';
import { useGameConfig } from '../../contexts/ConfigContext';

export function SymbolGrid ({}: SymbolGridProps): JSX.Element {
    const { symbols, setGameConfig } = useGameConfig();

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
