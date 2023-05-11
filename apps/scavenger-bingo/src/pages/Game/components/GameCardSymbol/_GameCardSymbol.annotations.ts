export type GameCardSymbolStatus = 'open' | 'closed';

export type GameCardSymbolProps = {
	id: string;
	position: string;
	found?: boolean;
};
