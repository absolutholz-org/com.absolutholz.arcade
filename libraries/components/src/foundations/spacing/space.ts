export type Space = 25 | 50 | 100 | 125 | 150 | 200 | 300;

export function space(size: Space): string {
	return `${size / 100}rem`;
}
