import { IMAGE_DIRECTORY } from '../../../../App.constants';
import { useGameConfig } from '../../../../contexts/GameConfigContext';
import { useGameSet } from '../../../../contexts/GameSetContext';
import type { SymbolProps } from './_Symbol.annotations';
import * as S from './_Symbol.styled';

export function Symbol ({ file, id }: SymbolProps): JSX.Element {
    const { id: gameSetId } = useGameSet();
    const { symbolIds, setGameConfig } = useGameConfig();

    const imgSrc = `${IMAGE_DIRECTORY}${gameSetId}/${file}`;
    const isChecked = symbolIds.includes(id);
    const htmlId = `symbol_${id}`;

    function handleChange () {
        setGameConfig({
            symbolIds: symbolIds.includes(id)
                ? symbolIds.filter((symbolId) => symbolId !== id)
                : [...symbolIds, id]
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
