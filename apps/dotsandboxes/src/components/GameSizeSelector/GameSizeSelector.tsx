import { useState } from 'react';

import SvgChange from 'mdi-react/PencilIcon';

import * as S from './GameSizeSelector.styled';
import {
	ButtonIcon,
	ButtonVariant,
	DialogConfirm,
	Icon,
	InputGroup,
} from '@arcade/library-components';
import { useGameConfiguration } from '../../context/GameConfiguration/useGameConfiguration';
import { GameConfigurationAction } from '../../context/GameConfiguration';

export function GameSizeSelector(): JSX.Element {
	const {
		gameSize: { columnCount: configColumnCount, rowCount: configRowCount },
		dispatch,
	} = useGameConfiguration();
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [columnCount, setColumnCount] = useState(configColumnCount);
	const [rowCount, setRowCount] = useState(configRowCount);

	const handleDialogConfirm = () => {
		dispatch({
			type: GameConfigurationAction.SetSize,
			size: {
				columnCount,
				rowCount,
			},
		});
		setIsDialogOpen(false);
	};

	return (
		<div>
			<S.ThemeName>
				<span>
					{configColumnCount} columns x {configRowCount} rows
				</span>
				<ButtonIcon
					inline={true}
					onClick={() => setIsDialogOpen(true)}
					variant={ButtonVariant.Text}>
					<Icon icon={SvgChange} />
				</ButtonIcon>
			</S.ThemeName>

			<DialogConfirm
				isOpen={isDialogOpen}
				onCancel={() => setIsDialogOpen(false)}
				onConfirm={handleDialogConfirm}
				slotHeader='Gameboard Size'>
				<InputGroup
					inputId={`gameSize-column-count`}
					key={`gameSize-column-count`}
					slotLabel={<S.Title>Columns: {columnCount}</S.Title>}
					slotInput={
						<S.RangeInput
							defaultValue={columnCount}
							id={`gameSize-column-count`}
							max='8'
							min='3'
							name='gameSize-column-count'
							// https://www.30secondsofcode.org/react/s/slider
							onChange={({ target: { valueAsNumber } }) =>
								setColumnCount(valueAsNumber)
							}
							step='1'
						/>
					}
				/>
				<InputGroup
					inputId={`gameSize-row-count`}
					key={`gameSize-row-count`}
					slotLabel={<S.Title>Rows: {rowCount}</S.Title>}
					slotInput={
						<S.RangeInput
							defaultValue={rowCount}
							id={`gameSize-row-count`}
							max='8'
							min='3'
							name='gameSize-row-count'
							// https://www.30secondsofcode.org/react/s/slider
							onChange={({ target: { valueAsNumber } }) =>
								setRowCount(valueAsNumber)
							}
							step='1'
						/>
					}
				/>
			</DialogConfirm>
		</div>
	);
}
