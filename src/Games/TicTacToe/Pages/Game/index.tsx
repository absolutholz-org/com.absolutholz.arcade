import { PageLayoutContainer } from '../../../../Components/PageLayoutContainer';
import { Gameboard } from '../../Components/Gameboard';
import { Scoreboard } from '../../Components/Scoreboard';

export function Game (): JSX.Element {
    return (
        <PageLayoutContainer>
            <main>
                <Gameboard />
                <Scoreboard />
            </main>
        </PageLayoutContainer>
    )
}
