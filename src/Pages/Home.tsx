import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { PlayerForm } from '../components/PlayerForm';
import { PageLayoutContainer } from '../components/PageLayoutContainer';
import { UserContext } from "../Context/User";
import { Dialog } from "../components/Dialog";
import { Button } from "../components/Button";

export function Home (): JSX.Element {
    const [ isPlayerDialogOpen, setIsPlayerDialogOpen ] = useState(false);

    const { user, saveUser, clearUser } = useContext(UserContext);

    const closePlayerDialog = () => {
        setIsPlayerDialogOpen(false);
    }

    const openPlayerDialog = () => {
        setIsPlayerDialogOpen(true);
    }

    const handlePlayerFormSubmit = (name: string) => {
        console.log({name});
        closePlayerDialog();
        saveUser({
            displayName: name
        });
    };

    return (
        <PageLayoutContainer>
            <main>
                <h1>Arcade</h1>

                { user?.displayName &&
                    <div>
                        <div>Hello <strong>{ user.displayName }</strong></div>
                        <button onClick={ clearUser }>log out</button>
                    </div>
                }

                <nav>
                    <h2>Games</h2>
                    <section>
                        <h3>Single Player</h3>
                        <article>
                            <h4>Sudoku</h4>
                            <Link to='/sudoku'>Play</Link>
                        </article>
                        <article>
                            <h4>Minesweeper</h4>
                            <Link to='/minesweeper'>Play</Link>
                        </article>
                    </section>
                    <section>
                        <h3>Two Players</h3>
                        <article>
                            <h4>TicTacToe</h4>
                            <Link to='/tictactoe'>Play</Link>
                        </article>
                        <article>
                            <h4>Connect 4</h4>
                            <Link to='/connect4'>Play</Link>
                        </article>
                        <article>
                            <h4>Checkers</h4>
                            <Link to='/checkers'>Play</Link>
                        </article>
                    </section>
                    <section>
                        <h3>Multiple Players</h3>
                        <article>
                            <h4>Memory</h4>
                            <Link to='/memory'>Play</Link>
                        </article>
                        <article>
                            <h4>Dots & Boxes</h4>
                            <Link to='/dotsandboxes'>Play</Link>
                        </article>
                    </section>
                </nav>

                { !user &&
                    <button onClick={ openPlayerDialog }>Log in</button>
                }

                <Dialog 
                    isOpen={ isPlayerDialogOpen }
                    slotFooter={
                        <Button form='homePlayer' type='submit'>Save</Button>
                    }
                >
                    <PlayerForm 
                        formID='homePlayer' 
                        onSubmit={ handlePlayerFormSubmit } 
                    />
                </Dialog>
            </main>
        </PageLayoutContainer>
    );
}
