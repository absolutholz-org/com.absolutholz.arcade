import { SpaceLevel } from './space.types';

export function space(level: SpaceLevel, isNegative: boolean = false) {
	if (isNegative) {
		return `calc(var(--space-${level}) * -1)`;
	}
	return `var(--space-${level})`;
}
