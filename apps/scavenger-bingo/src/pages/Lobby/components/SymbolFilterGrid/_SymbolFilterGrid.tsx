import { useEffect, useState } from 'react';

import { SymbolFilterGridProps } from './_SymbolFilterGrid.types';
import * as S from './_SymbolFilterGrid.styled';
import { default as ALL_SYMBOLS } from '../../../../configs/germany/symbols.json';
import { IMAGE_DIRECTORY } from '../../../../App.constants';
import { Typography } from '@arcade/library-components/src/components/Typography';
import { Stack } from '@arcade/library-components/src/components/Stack';

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

	useEffect(() => {
		onSymbolSelectionChange(selectedSymbolIds);
	}, [selectedSymbolIds]);

	return (
		<Stack tag='fieldset' direction='column' spaceLevelY='m'>
			<legend>
				<Typography as='div' level={1}>
					Symbols
				</Typography>
				<Typography as='div' level={-1}>
					{selectedSymbolIds.length} selected
				</Typography>
			</legend>

			<S.SymbolFilterGrid_List>
				{ALL_SYMBOLS.map(({ filename, id }) => (
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
							src={`${IMAGE_DIRECTORY}germany/${filename}`}
							width={50}
						/>
					</S.SymbolFilterGrid_Label>
				))}
			</S.SymbolFilterGrid_List>

			<Stack direction='row' spaceLevelX='s'>
				<button onClick={handleSelectAll} type='button'>
					Select All
				</button>
				<button onClick={handleDeselectAll} type='button'>
					Deselect All
				</button>
			</Stack>
		</Stack>
	);
}