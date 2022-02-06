import * as S from './IconText.styled';
import { IIconTextProps } from './IIconText';

export function IconText ({ children, slotIconPrefix, slotIconSuffix, tag = 'div', ...props }: IIconTextProps): JSX.Element {
    return (
        <S.IconText as={ tag } {...props}>
            { slotIconPrefix &&
                <div>
                    { slotIconPrefix }
                </div>
            }
            <div>
                { children }
            </div>
            {/* { slotIconSuffix &&
                <div>
                    { slotIconSuffix }
                </div>
            } */}
        </S.IconText>
    )
}
