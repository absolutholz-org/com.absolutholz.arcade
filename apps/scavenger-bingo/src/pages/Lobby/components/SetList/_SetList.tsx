import * as S from './_SetList.styled';
import { CONFIGS } from '../../../../configs';
import { useSetConfig } from '../../../../contexts/SetContext/_SetContext';

export function SetList (): JSX.Element {
    const { setSetId } = useSetConfig();

    function handleSelect (id: string) {
        setSetId(id);
    }

    return (
        <S.SetList direction='row' shouldResetList spacingY='m' tag='ol'>
            { CONFIGS.map(({ id, name }) => (
                <button key={ id } onClick={() => handleSelect(id)} type='button'>{ name }</button>
            ))}
        </S.SetList>
    );
}
