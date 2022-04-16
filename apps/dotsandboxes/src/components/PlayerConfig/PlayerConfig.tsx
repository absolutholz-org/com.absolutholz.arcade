import { useRef, useState } from 'react';

import SvgChange from 'mdi-react/PencilIcon';

import {
	ButtonIcon,
	ButtonVariant,
	DialogConfirm,
	Icon,
} from '@arcade/library-components';

import { IPlayerConfigProps } from './IPlayerConfig';
import * as S from './PlayerConfig.styled';

export function PlayerConfig({
	id,
	player,
	setPlayer,
}: IPlayerConfigProps): JSX.Element {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const nameRef = useRef<HTMLInputElement>(null);
	const colorRef = useRef<HTMLInputElement>(null);

	const handleDialogConfirm = (): void => {
		if (nameRef.current?.value) {
			setPlayer((player) => {
				return {
					...player,
					displayName: nameRef.current!.value,
					color: colorRef.current!.value,
				};
			});
			setIsDialogOpen(false);
		}
	};

	return (
		<S.PlayerConfig>
			<S.PlayerName>
				<span>{player.displayName}</span>
				<ButtonIcon
					inline={true}
					onClick={() => setIsDialogOpen(true)}
					variant={ButtonVariant.Text}>
					<Icon icon={SvgChange} />
				</ButtonIcon>
			</S.PlayerName>

			<DialogConfirm
				isOpen={isDialogOpen}
				onCancel={() => setIsDialogOpen(false)}
				onConfirm={handleDialogConfirm}>
				<label htmlFor={`player-${id}_name `}>
					<div>Name</div>
					<input
						id={`player-${id}_name `}
						maxLength={12}
						minLength={2}
						name={`player-${id}_name `}
						ref={nameRef}
						required
						type='text'
						defaultValue={player.displayName}
					/>
				</label>
				<label htmlFor={`player-${id}_color `}>
					<div>Color</div>
					<input
						id={`player-${id}_color `}
						maxLength={12}
						minLength={2}
						name={`player-${id}_color `}
						ref={colorRef}
						required
						type='text'
						defaultValue={player.color}
					/>
				</label>
			</DialogConfirm>
		</S.PlayerConfig>
	);
}
