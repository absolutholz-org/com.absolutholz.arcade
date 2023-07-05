export type SetSymbol = {
	id: string;
	file: string;
	tags?: string[];
	variant?: boolean;
}

export type SetPreset = {
	id: string;
	image: {
		id: string;
		file: string;
	};
	symbols: string[];
}

export type SetPresetCustom = Omit<SetPreset, 'image'> & {
	name: string;
	setId: string;
};
