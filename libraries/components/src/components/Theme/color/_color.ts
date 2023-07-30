import type { ColorLevel, ColorOption } from './_color.types';

export function color(option: ColorOption, level?: ColorLevel) {
	if (level) {
		return `hsl(var(--color-${option}-${level}, var(--${option})))`;
	}
	return `hsl(var(--color-${option}))`;
}

export function transparentColor(
	option: ColorOption,
	alpha: number,
	level?: ColorLevel
) {
	if (alpha <= 0 || alpha >= 1) {
		throw new Error(
			`The desired alpha value of ${alpha} is not valid. You can only pass a value between 0 and 1.`
		);
	}

	if (level) {
		return `hsl(var(--color-${option}-${level}, var(--${option})) / ${alpha})`;
	}
	return `hsl(var(--color-${option}) / ${alpha})`;
}
