import { SpaceLevel } from './_Space.types';

export function space(level: SpaceLevel) {
	return `var(--space-${level})`;
}
