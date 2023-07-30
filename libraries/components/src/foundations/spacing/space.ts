import { SpaceLevel } from './space.types';

export function space(level: SpaceLevel) {
	return `var(--space-${level})`;
}
