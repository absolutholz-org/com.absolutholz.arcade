import { useEffect, useState } from 'react';

import { IColorSchemeTogglerProps } from './IColorSchemeToggler';
import * as S from './ColorSchemeToggler.styled';

const enum ColorScheme {
    Light = 'light',
    Auto = 'auto',
    Dark = 'dark',
}

const STORAGE_KEY = 'absolutholz.arcade:color-theme';
const HTML_SCHEME_ATTRIBUTE = 'data-color-scheme';

const elHtml = document.getElementsByTagName('html')[0];

export function ColorSchemeToggler ({ id }: IColorSchemeTogglerProps): JSX.Element {
    const [ scheme, setScheme ] = useState<ColorScheme>(ColorScheme.Auto);
       
    const toggleState = () => {
        switch (scheme) {
            case ColorScheme.Auto:
                setScheme(ColorScheme.Light);
                break;
            case ColorScheme.Light:
                setScheme(ColorScheme.Dark);
                break;
            default:
                setScheme(ColorScheme.Auto);
        }
    };

    useEffect(() => {
        console.log(localStorage.getItem(STORAGE_KEY));
        switch (localStorage.getItem(STORAGE_KEY)) {
            case ColorScheme.Light:
                setScheme(ColorScheme.Light);
                break;
            case ColorScheme.Dark:
                setScheme(ColorScheme.Dark);
                break;
            default:
                setScheme(ColorScheme.Auto);
        }
    }, []);

    useEffect(() => {
        console.log({scheme});
        if (scheme === ColorScheme.Light) {
            elHtml.setAttribute(HTML_SCHEME_ATTRIBUTE, 'light');
            localStorage.setItem(STORAGE_KEY, ColorScheme.Light);
        } else if (scheme === ColorScheme.Dark) {
            elHtml.setAttribute(HTML_SCHEME_ATTRIBUTE, 'dark');
            localStorage.setItem(STORAGE_KEY, ColorScheme.Dark);
        } else {
            elHtml.removeAttribute(HTML_SCHEME_ATTRIBUTE);
            localStorage.removeItem(STORAGE_KEY);
        }
    }, [ scheme ]);

    return (
        <S.Wrapper>
            <S.Toggler 
                aria-label='Click to toggle light, dark or system color schemes'
                title='Click to toggle light, dark or system color schemes'
                onClick={ toggleState }
            >{ scheme }</S.Toggler>
        </S.Wrapper>
    );
}
