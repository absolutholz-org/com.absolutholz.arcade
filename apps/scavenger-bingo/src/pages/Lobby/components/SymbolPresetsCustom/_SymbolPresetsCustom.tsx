import type { SymbolPresetsCustomProps } from './_SymbolPresetsCustom.annotations';
import * as S from './_SymbolPresetsCustom.styled';
import { useGameConfig } from '../../../../contexts/ConfigContext';
import { useSetConfig } from '../../../../contexts/SetContext/_SetContext';

export function SymbolPresetsCustom({}: SymbolPresetsCustomProps): JSX.Element {
	const { customPresets } = useSetConfig();
	const { setGameConfig } = useGameConfig();

	function handleSelection(id: string) {
		const preset = customPresets.find((preset) => preset.id === id);

		if (!preset?.symbols) return;

		setGameConfig({ symbolIds: preset.symbols });
	}

	return customPresets.length > 0 
		? <S.SymbolPresetsCustom_List>
			{customPresets.map(({ id, name }) => (
				<S.SymbolPresetsCustom_Button
					key={`preset_${id}`}
					onClick={() => handleSelection(id)}
					type='button'>{ name }
				</S.SymbolPresetsCustom_Button>
			))}
		</S.SymbolPresetsCustom_List>
		: <></>;
}
