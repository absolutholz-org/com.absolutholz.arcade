import { useEffect, useState } from 'react';

import { Typography } from '@arcade/library-components/src/components/Typography';
import { Stack } from '@arcade/library-components/src/components/Stack';

import { SymbolFilterGridProps } from './_SymbolFilterGrid.annotations';
import * as S from './_SymbolFilterGrid.styled';
import { IMAGE_DIRECTORY } from '../../../../App.constants';

import { default as ALL_SYMBOLS } from '../../../../configs/germany-road-signs/symbols.json';
import { SymbolPresets } from '../SymbolPresets';
import { Button } from '@arcade/library-components/src/components/Button';

export function SymbolFilterGrid({
	onSymbolSelectionChange,
}: SymbolFilterGridProps) {
	const [selectedSymbolIds, setSelectedSymbolIds] = useState(
		ALL_SYMBOLS.filter(({ variant }) => !variant).map(({ id }) => id)
	);

	function handleSymbolChange(id: string) {
		setSelectedSymbolIds((selectedSymbolIds) => {
			if (selectedSymbolIds.includes(id)) {
				return selectedSymbolIds.filter((symbolId) => symbolId !== id);
			} else {
				return [...selectedSymbolIds, id];
			}
		});
	}

	function handleSelectAll() {
		setSelectedSymbolIds(ALL_SYMBOLS.map(({ id }) => id));
	}

	function handleDeselectAll() {
		setSelectedSymbolIds([]);
	}

	function handlePresetSelectionChange(symbolIds: any) {
		setSelectedSymbolIds(symbolIds);
	}

	useEffect(() => {
		onSymbolSelectionChange(selectedSymbolIds);
	}, [selectedSymbolIds]);

	return (
		<>
			<SymbolPresets
				onPresetSelectionChange={handlePresetSelectionChange}
			/>

			<Stack tag='fieldset' direction='column' spacingY='m'>
				<legend>
					<Typography size='l' as='div'>
						Custom selection
					</Typography>
				</legend>

				<S.SymbolFilterGrid_List>
					{ALL_SYMBOLS.map(({ file, id }) => (
						<S.SymbolFilterGrid_Label
							htmlFor={`symbol_${id}`}
							key={`symbol_${id}`}>
							<S.SymbolFilterGrid_Input
								id={`symbol_${id}`}
								checked={selectedSymbolIds.includes(id)}
								name={`symbol_${id}`}
								onChange={() => handleSymbolChange(id)}
								type='checkbox'
							/>
							<S.SymbolFilterGrid_Image
								alt={id}
								height={50}
								loading='lazy'
								src={`${IMAGE_DIRECTORY}germany-road-signs/${file}`}
								width={50}
							/>
						</S.SymbolFilterGrid_Label>
					))}
				</S.SymbolFilterGrid_List>

				<Stack direction='row' spacingX='s'>
					<Button
						onClick={handleSelectAll}
						type='button'
						text='Select All'
					/>
					<Button
						onClick={handleDeselectAll}
						type='button'
						text='Deselect All'
					/>
				</Stack>
			</Stack>
		</>
	);
}
