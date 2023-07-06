import * as S from './_SetList.styled';
import { CONFIGS } from '../../../../configs';
import { useGameConfig } from '../../../../contexts/GameConfigContext';

export function SetList (): JSX.Element {
    const { setGameConfig } = useGameConfig();

    function handleSelect (id: string) {
        setGameConfig({ gameSetId: id, symbolIds: [] });
    }

    return (
        <S.SetList direction='row' shouldResetList spacingY='m' tag='ol'>
            { CONFIGS.map(({ id, name }) => (
                <button key={ id } onClick={() => handleSelect(id)} type='button'>{ name }</button>
            ))}
        </S.SetList>
    );
}
