import { FormEvent, useEffect, useRef, useState } from 'react';

import SvgChange from 'mdi-react/PencilIcon';
import SvgPlus from 'mdi-react/PlusIcon';
import SvgDelete from 'mdi-react/DeleteForeverIcon';

import {
	ButtonIcon,
	ButtonVariant,
	DialogConfirm,
	Icon,
	Input,
	InputGroup,
} from '@arcade/library-components';

import * as S from './PlayerConfig.styled';
import {
	GameConfigurationAction,
	IPlayer,
	useGameConfiguration,
} from '../../context/GameConfiguration';

export function PlayerConfig(): JSX.Element {
	const { players, dispatch } = useGameConfiguration();
	const [placeholderCount, setPlaceholderCount] = useState(
		4 - players.length
	);
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [editPlayer, setEditPlayer] = useState(players[0]);
	const nameRef = useRef<HTMLInputElement>(null);
	const colorRef = useRef<HTMLInputElement>(null);
	const refForm = useRef<HTMLFormElement>(null);

	const handleDialogConfirm = (): void => {
		if (nameRef.current?.value) {
			dispatch({
				type: GameConfigurationAction.UpdatePlayer,
				player: {
					...editPlayer,
					displayName: nameRef.current!.value,
					color: colorRef.current!.value,
				},
			});

			setIsDialogOpen(false);
		}
	};

	const handleFormSubmit = (event: FormEvent) => {
		event.preventDefault();
		handleDialogConfirm();
	};

	const createPlayer = (position: number) => {
		dispatch({
			type: GameConfigurationAction.CreatePlayer,
		});
	};

	const deletePlayer = (player: IPlayer) => {
		dispatch({
			type: GameConfigurationAction.DeletePlayer,
			player,
		});
	};

	const updatePlayer = (player: IPlayer) => {
		if (refForm.current) {
			refForm.current.reset();
			setEditPlayer(player);
			setIsDialogOpen(true);
		}
	};

	useEffect(() => {
		setPlaceholderCount(4 - players.length);
	}, [players]);

	return (
		<S.PlayersContainer>
			{players.map((player) => (
				<S.PlayerConfig key={`player-config-${player.uuid}`}>
					<S.PlayerName>
						<span>{player.displayName}</span>
						<ButtonIcon
							inline={true}
							onClick={() => updatePlayer(player)}
							variant={ButtonVariant.Text}>
							<Icon icon={SvgChange} />
						</ButtonIcon>
						<ButtonIcon
							inline={true}
							onClick={() => deletePlayer(player)}
							variant={ButtonVariant.Text}>
							<Icon icon={SvgDelete} />
						</ButtonIcon>
					</S.PlayerName>
				</S.PlayerConfig>
			))}
			{Array.from(Array(placeholderCount)).map((n, row, array) => (
				<div
					key={`player-config-create-player-${
						players.length + 1 + row
					}`}>
					Player {players.length + 1 + row}
					<ButtonIcon
						inline={true}
						onClick={createPlayer}
						variant={ButtonVariant.Text}>
						<Icon icon={SvgPlus} />
					</ButtonIcon>
				</div>
			))}
			<DialogConfirm
				isOpen={isDialogOpen}
				onCancel={() => setIsDialogOpen(false)}
				onConfirm={handleDialogConfirm}
				slotHeader='Player Config'>
				<form onSubmit={handleFormSubmit} ref={refForm}>
					<InputGroup
						slotLabel='Name'
						slotInput={
							<Input
								id={`player-${editPlayer.uuid}_name `}
								maxLength={12}
								minLength={2}
								name={`player-${editPlayer.uuid}_name `}
								ref={nameRef}
								required
								type='text'
								defaultValue={editPlayer.displayName}
							/>
						}
						inputId={`player-${editPlayer.uuid}_name `}
					/>

					<InputGroup
						slotLabel='Color'
						slotInput={
							<Input
								id={`player-${editPlayer.uuid}_color `}
								name={`player-${editPlayer.uuid}_color `}
								ref={colorRef}
								required
								type='color'
								defaultValue={editPlayer.color}
							/>
						}
						inputId={`player-${editPlayer.uuid}_color `}
					/>
				</form>
			</DialogConfirm>
		</S.PlayersContainer>
	);
}
