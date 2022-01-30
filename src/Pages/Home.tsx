import { useContext, useRef } from "react";
import { Link } from "react-router-dom";

import { PlayerForm } from '../Components/PlayerForm';
import { UserContext } from "../Context/User";

export function Home (): JSX.Element {
    const loginDialogRef = useRef<HTMLDialogElement>(null);

    const { user, saveUser, clearUser } = useContext(UserContext);

    const closePlayerDialog = () => {
        // @ts-ignore
        loginDialogRef.current.close();
    }

    const openPlayerDialog = () => {
        // @ts-ignore
        loginDialogRef.current.showModal();
    }

    const handlePlayerFormSubmit = (name: string) => {
        console.log({name});
        closePlayerDialog();
        saveUser({
            displayName: name
        });
    };

    return (
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

            <dialog ref={ loginDialogRef }>
                <PlayerForm formID='homePlayer' onSubmit={ handlePlayerFormSubmit } />
            </dialog>
        </main>
    );
}
