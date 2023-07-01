import { IMAGE_DIRECTORY } from '../../../../App.constants';
import { useGameConfig } from '../../contexts/ConfigContext';
import type { SymbolProps } from './_Symbol.annotations';
import * as S from './_Symbol.styled';

export function Symbol ({ file, id, allSymbols }: SymbolProps): JSX.Element {
    const { gameConfig, setGameConfig } = useGameConfig();

    const imgSrc = `${IMAGE_DIRECTORY}${gameConfig.gameConfigId}/${file}`;
    const isChecked = gameConfig.symbolIds.includes(id);
    const htmlId = `symbol_${id}`;

    function handleChange () {
        setGameConfig({
            symbolIds: gameConfig.symbolIds.includes(id)
                ? gameConfig.symbolIds.filter((symbolId) => symbolId !== id)
                : [...gameConfig.symbolIds, id]
        });
    }

    return (
        <S.SymbolGrid_Label
            htmlFor={htmlId}>
            <S.SymbolGrid_Input
                id={htmlId}
                checked={isChecked}
                name={htmlId}
                onChange={handleChange}
                type='checkbox'
            />
            <S.SymbolGrid_Image
                alt={id}
                height={50}
                loading='lazy'
                src={imgSrc}
                width={50}
            />
        </S.SymbolGrid_Label>
    );
}
