import { PageLayoutContainer } from '../../../../components/PageLayoutContainer';
import { Gameboard } from '../../components/Gameboard';
import { Scoreboard } from '../../components/Scoreboard';
import { GameProvider } from '../../context/Game';

export function Game (): JSX.Element {
    return (
        <GameProvider>
            <PageLayoutContainer>
                <main>
                    <Gameboard />
                    <Scoreboard />
                </main>
            </PageLayoutContainer>
        </GameProvider>
    );
}
