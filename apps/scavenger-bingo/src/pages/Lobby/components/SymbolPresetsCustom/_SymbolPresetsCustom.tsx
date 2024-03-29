import type { SymbolPresetsCustomProps } from './_SymbolPresetsCustom.annotations';
import * as S from './_SymbolPresetsCustom.styled';
import { useGameConfig } from '../../../../contexts/GameConfigContext';
import { useGameSet } from '../../../../contexts/GameSetContext';

export function SymbolPresetsCustom({}: SymbolPresetsCustomProps): JSX.Element {
	const { customPresets, id: gameSetId } = useGameSet();
	const { setGameConfig } = useGameConfig();

	function handleSelection(id: string) {
		const preset = customPresets.find((preset) => preset.id === id);

		if (!preset?.symbols) return;

		setGameConfig({ symbolIds: preset.symbols });
	}

	return customPresets.length > 0 ? (
		<S.SymbolPresetsCustom_List>
			{customPresets
				.filter(({ setId }) => setId === gameSetId)
				.map(({ id, name }) => (
					<S.SymbolPresetsCustom_Button
						key={`preset_${id}`}
						onClick={() => handleSelection(id)}
						type='button'>
						{name}
					</S.SymbolPresetsCustom_Button>
				))}
		</S.SymbolPresetsCustom_List>
	) : (
		<></>
	);
}
