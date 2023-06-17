import { PageGridContainer } from '../PageGrid';
import { Typography } from '../Typography';
import type { PageHeadBillboardProps } from './_PageHeadBillboard.annotations';
import * as S from './_PageHeadBillboard.styled';

export function PageHeadBillboard ({headline, headlinePrefix, headlineSuffix, children}: PageHeadBillboardProps): JSX.Element {
    return (
        <S.PageHeadBillboard themeSetId='highlight'>
            <PageGridContainer>
                <S.PageHeadBillboard_H1 size='xxxxl' as='h1'>
                    {headlinePrefix && <Typography size='l'>{headlinePrefix}</Typography>}
                    {headline}
                    {headlineSuffix && <Typography size='l'>{headlineSuffix}</Typography>}
                    {children}
                </S.PageHeadBillboard_H1>
            </PageGridContainer>
        </S.PageHeadBillboard>
    );
}
