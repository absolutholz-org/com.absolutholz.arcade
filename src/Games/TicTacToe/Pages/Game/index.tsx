import { PageLayoutContainer } from '../../../../Components/PageLayoutContainer';
import { Gameboard } from '../../components/Gameboard';
import { Scoreboard } from '../../components/Scoreboard';
import { CountProvider } from '../../context/Game';

export function Game (): JSX.Element {
    return (
        <CountProvider>
            <PageLayoutContainer>
                <main>
                    <Gameboard />
                    <Scoreboard />
                </main>
            </PageLayoutContainer>
        </CountProvider>
    );
}
