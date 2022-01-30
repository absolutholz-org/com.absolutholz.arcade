import { Gameboard } from '../../Components/Gameboard';
import { Scoreboard } from '../../Components/Scoreboard';

export function Game (): JSX.Element {
    return (
        <main>
            <Gameboard />
            <Scoreboard />
        </main>
    )
}
