import { PlayerAvatarProps } from './PlayerAvatar.annotations';
import * as S from './PlayerAvatar.styled';

function getInitialsFromName(name: string): string {
	let namePieces = name.split(' ');
	if (namePieces.length > 1) {
		return `${namePieces[0][0]}${namePieces[1][0]}`;
	}

	namePieces = name.split('-');
	if (namePieces.length > 1) {
		return `${namePieces[0][0]}${namePieces[1][0]}`;
	}

	namePieces = name.split('_');
	if (namePieces.length > 1) {
		return `${namePieces[0][0]}${namePieces[1][0]}`;
	}

	return `${name[0]}${name[1]}`;
}

export function PlayerAvatar({ playerName }: PlayerAvatarProps): JSX.Element {
	const playerInitials = getInitialsFromName(playerName);
	return <S.PlayerAvatar>{playerInitials}</S.PlayerAvatar>;
}
