import { css, DefaultTheme, ThemedCssFunction } from "styled-components";

type TypoSize = 80 | 100 | 112.5 | 125 | 150 | 200 | 300 | 400;

type TypoSizeValues = {
	fontSize: number;
	lineHeight: number;
};

export function typoSizeCss(size: TypoSize) {
	const values: TypoSizeValues = typoSize(size);

	return css`
		font-size: ${values.fontSize}rem;
		line-height: ${values.lineHeight};
	`;
}

export function typoSize(size: TypoSize): TypoSizeValues {
	const values: TypoSizeValues = {
		fontSize: 1,
		lineHeight: 1.5,
	};

	switch (size) {
		case 80:
			values.fontSize = 0.8;
			values.lineHeight = 1.5;
			break;
		case 112.5:
			values.fontSize = 1.125;
			values.lineHeight = 1.5;
			break;
		case 125:
			values.fontSize = 1.25;
			values.lineHeight = 1.4;
			break;
		case 150:
			values.fontSize = 1.5;
			values.lineHeight = 1.3;
			break;
		case 200:
			values.fontSize = 2;
			values.lineHeight = 1.2;
			break;
		case 300:
			values.fontSize = 3;
			values.lineHeight = 1.1;
			break;
	}

	return values;
}
