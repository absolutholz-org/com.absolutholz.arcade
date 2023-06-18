import { css } from "@emotion/react";

type TypoSize = 80 | 100 | 112.5 | 125 | 150 | 200 | 300 | 400;

type TypoSizeValues = {
	fontSize: string;
	lineHeight: number;
};

export function typoSizeCss(size: TypoSize) {
	const values: TypoSizeValues = typoSize(size);

	return css`
		font-size: ${values.fontSize};
		line-height: ${values.lineHeight};
	`;
}

export function typoSize(size: TypoSize): TypoSizeValues {
	const values: TypoSizeValues = {
		fontSize: '1rem',
		lineHeight: 1.5,
	};

	switch (size) {
		case 80:
			values.fontSize = '0.8rem';
			values.lineHeight = 1.5;
			break;
		case 112.5:
			values.fontSize = '1.125rem';
			values.lineHeight = 1.5;
			break;
		case 125:
			values.fontSize = '1.25rem';
			values.lineHeight = 1.4;
			break;
		case 150:
			values.fontSize = '1.5rem';
			values.lineHeight = 1.3;
			break;
		case 200:
			values.fontSize = '2rem';
			values.lineHeight = 1.2;
			break;
		case 300:
			values.fontSize = '3rem';
			values.lineHeight = 1.1;
			break;
	}

	return values;
}
