import type { ReactNode } from 'react';

import * as S from './_StoryPlaceholder.styled';
import { LOREM_IPSUM } from '../placeholderText';

export function StoryPlaceholder ({ children = LOREM_IPSUM }: { children?: ReactNode; }): JSX.Element {
    return (
        <S.StoryPlaceholder_Spacing>
            <S.StoryPlaceholder_Content>
                { children }
            </S.StoryPlaceholder_Content>
        </S.StoryPlaceholder_Spacing>
    );
}
