export type GameSetSymbol = {
	id: string;
	file: string;
	tags?: string[];
	variant?: boolean;
}

export type GameSetPreset = {
	id: string;
	image: {
		id: string;
		file: string;
	};
	symbols: string[];
}

export type GameSetPresetCustom = Omit<GameSetPreset, 'image'> & {
	name: string;
	setId: string;
};

export type GameSet = {
    id?: string;
    symbols: GameSetSymbol[];
    presets: GameSetPreset[];
    customPresets: GameSetPresetCustom[];
}
