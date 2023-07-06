import { Stack } from '@arcade/library-components/src/components/Stack';

import * as S from './_CustomPresetList.styled';
import { useCustomPresets } from '../../../../contexts/CustomPresetsContext';
import { Typography } from '@arcade/library-components/src/components/Typography';
import { VisuallyHidden } from '@arcade/library-components/src/components/VisuallyHidden';

export function CustomPresetList (): JSX.Element {
    const { customPresets, removeCustomPreset } = useCustomPresets();

    function handleRemove (id: string): void {
        removeCustomPreset(id);
    }

    return (
        <>
            { customPresets.length > 0 ? (
                <Stack shouldResetList spacingY='m' tag='ol'>
                    {customPresets.map(({ id, name, setId, symbols }) => (
                        <S.CustomPresetList
                            direction='row'
                            key={id}
                            spacingX='s'
                            spacingY='xs'
                        >
                            <div>
                                <S.CustomPresetList_Title>
                                    <Typography as='span' size='m' weight='heavy'>{ name }</Typography> 
                                    <Typography as='span' size='s'>
                                        <S.CustomPresetList_Separator>
                                            <VisuallyHidden>of</VisuallyHidden>
                                        </S.CustomPresetList_Separator>
                                        { setId }
                                    </Typography>
                                </S.CustomPresetList_Title>
                                <Typography size='xs'>{ symbols.length } symbols</Typography>
                            </div>

                            <div>
                                <button
                                    onClick={() => handleRemove(id)}
                                >Remove</button>
                            </div>
                        </S.CustomPresetList>
                    ))}
                </Stack>
            ) : <></> }
        </>
    );
}
