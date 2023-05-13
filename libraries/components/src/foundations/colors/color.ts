type ColorToken = 'surface' | 'primary' | 'secondary' | 'accent' | 'error';

export function color(token: ColorToken, alpha?: number) {
	const isAlphaDefined = alpha !== undefined;
	if (isAlphaDefined && (alpha < 0 || alpha > 1)) {
		throw new Error('Alpha value is out of range');
	}

	return `hsl(var(--role-${token})${isAlphaDefined ? ` / ${alpha}` : ''})`;
}
