import type { ColorLevel, ColorOption } from './_Color.types';

export function color(option: ColorOption, level?: ColorLevel) {
	if (level) {
		return `var(--color-${option}-${level}, var(--${option}))`;
	}
	return `var(--color-${option})`;
}
