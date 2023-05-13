import { useGameConfiguration } from '../context/GameConfiguration';

export function Game() {
	const { gameSize } = useGameConfiguration();

	return <>game{gameSize}</>;
}
