import type { SymbolPresetsProps } from './_SymbolPresets.annotations';
import * as S from './_SymbolPresets.styled';
import { IMAGE_DIRECTORY } from '../../../../App.constants';
import { useGameConfig } from '../../contexts/ConfigContext';

export function SymbolPresets({}: SymbolPresetsProps): JSX.Element {
	const { presets, gameConfig, setGameConfig } = useGameConfig();

	function handleSelection(id: string) {
		const preset = presets.find((preset) => preset.id === id);

		if (!preset?.symbols) return;

		setGameConfig({ symbolIds: preset.symbols });
	}

	return presets.length > 0 
		? <S.SymbolPresets_List>
			{presets.map(({ id, image }) => (
				<S.SymbolPresets_Button
					key={`preset_${id}`}
					onClick={() => handleSelection(id)}
					type='button'>
					<S.SymbolPresets_Media>
						<S.SymbolPresets_Image
							alt={id}
							height={50}
							loading='lazy'
							src={`${IMAGE_DIRECTORY}${gameConfig.gameConfigId}/${image.file}`}
							width={50}
						/>
					</S.SymbolPresets_Media>
				</S.SymbolPresets_Button>
			))}
		</S.SymbolPresets_List>
		: <></>;
}
