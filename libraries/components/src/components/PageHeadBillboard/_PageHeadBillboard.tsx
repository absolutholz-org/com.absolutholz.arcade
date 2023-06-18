import { PageGridContainer } from '../PageGrid';
import { Stack } from '../Stack';
import { Typography } from '../Typography';
import type { PageHeadBillboardProps } from './_PageHeadBillboard.annotations';
import * as S from './_PageHeadBillboard.styled';

export function PageHeadBillboard ({headline, headlinePrefix, headlineSuffix, children}: PageHeadBillboardProps): JSX.Element {
    return (
        <S.PageHeadBillboard themeSetId='highlight'>
            <PageGridContainer>
                <S.PageHeadBillboard_H1 size='xxxxl' as='h1'>
                    {headlinePrefix && <Typography size='l'>{headlinePrefix}</Typography>}
                    <Stack spaceLevelY='s'>
                        {headline}
                        {headlineSuffix && <Typography size='l'>{headlineSuffix}</Typography>}
                    </Stack>
                    {children}
                </S.PageHeadBillboard_H1>
            </PageGridContainer>
        </S.PageHeadBillboard>
    );
}
