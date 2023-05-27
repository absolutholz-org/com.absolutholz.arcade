import { useEffect, useState } from 'react';

import { Stack } from '@arcade/library-components/src/components/Stack';
import { Typography } from '@arcade/library-components/src/components/Typography';

import type { SymbolPresetsProps } from './_SymbolPresets.annotations';
import * as S from './_SymbolPresets.styled';

import { default as PRESETS } from '../../../../configs/germany/presets.json';
import { default as ALL_SYMBOLS } from '../../../../configs/germany/symbols.json';
import { IMAGE_DIRECTORY } from '../../../../App.constants';

export function SymbolPresets({
	onPresetSelectionChange,
}: SymbolPresetsProps): JSX.Element {
	const [selectedPreset, setSelectedPreset] = useState(PRESETS[0]);

	function handlePresetChange(selectedPresetId: string) {
		setSelectedPreset(
			PRESETS.find(({ id }) => selectedPresetId === id) || PRESETS[0]
		);
	}

	useEffect(() => {
		onPresetSelectionChange(
			ALL_SYMBOLS.filter((symbol) =>
				selectedPreset.symbols.includes(symbol.id)
			).map(({ id }) => id)
		);
	}, [selectedPreset]);

	return (
		<Stack tag='fieldset' direction='column' spaceLevelY='m'>
			<legend>
				<Typography as='div' level={0}>
					Preset Selections
				</Typography>
			</legend>

			<S.SymbolPresets_List>
				{PRESETS.map(({ id, image }) => (
					<S.SymbolPresets_Button
						key={`preset_${id}`}
						onClick={() => handlePresetChange(id)}
						type='button'>
						<S.SymbolPresets_Media>
							<S.SymbolPresets_Image
								alt={id}
								height={50}
								loading='lazy'
								src={`${IMAGE_DIRECTORY}germany/${image.file}`}
								width={50}
							/>
						</S.SymbolPresets_Media>
						{/* <Typography level={0}>{id}</Typography> */}
					</S.SymbolPresets_Button>
				))}
			</S.SymbolPresets_List>
		</Stack>
	);
}
