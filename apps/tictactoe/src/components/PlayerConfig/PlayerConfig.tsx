import { useRef, useState } from 'react';

import SvgChange from 'mdi-react/PencilIcon';

import {
	ButtonIcon,
	ButtonVariant,
	DialogConfirm,
	Icon,
	Input,
	InputGroup,
} from '@arcade/library-components';

import { IPlayerConfigProps } from './IPlayerConfig';
import * as S from './PlayerConfig.styled';
import { GamePieceIcon } from '../GamePieceIcon';

export function PlayerConfig({
	id,
	player,
	setPlayer,
}: IPlayerConfigProps): JSX.Element {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const nameRef = useRef<HTMLInputElement>(null);

	const handleDialogConfirm = (): void => {
		if (nameRef.current?.value) {
			setPlayer((player) => {
				return {
					...player,
					displayName: nameRef.current!.value,
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

			<S.IconWrapper>
				<GamePieceIcon piece={player.piece} />
			</S.IconWrapper>

			<DialogConfirm
				isOpen={isDialogOpen}
				onCancel={() => setIsDialogOpen(false)}
				onConfirm={handleDialogConfirm}
				slotHeader='Player Config'>
				<InputGroup
					slotLabel='Name'
					slotInput={
						<Input
							id={`player-${id}_name `}
							maxLength={12}
							minLength={2}
							name={`player-${id}_name `}
							ref={nameRef}
							required
							type='text'
							defaultValue={player.displayName}
						/>
					}
					inputId={`player-${id}_name `}
				/>
			</DialogConfirm>
		</S.PlayerConfig>
	);
}
