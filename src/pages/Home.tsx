import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../context/User';
import { PlayerForm } from '../components/PlayerForm';
import { PageLayoutContainer } from '../components/PageLayoutContainer';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Dialog } from '../components/Dialog';
import { IconText } from '../components/IconText';
import { ColorSchemeToggler } from '../components/ColorSchemeToggler';

import { ReactComponent as SvgJoystick } from '../assets/joystick.svg';
import { Icon } from '../components/Icon';

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
            <header>
                <ColorSchemeToggler />
            </header>
            <main>
                <IconText tag='h1' slotIconPrefix={ <Icon>{ SvgJoystick }</Icon> }>
                    <div>absolutholz</div>
                    Arcade
                </IconText>

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
                        <Card tag='article'>
                            <h4>Sudoku</h4>
                            <Link to='/sudoku'>Play</Link>
                        </Card>
                        <Card tag='article'>
                            <h4>Minesweeper</h4>
                            <Link to='/minesweeper'>Play</Link>
                        </Card>
                    </section>
                    <section>
                        <h3>Two Players</h3>
                        <Card tag='article'>
                            <h4>TicTacToe</h4>
                            <Link to='/tictactoe'>Play</Link>
                        </Card>
                        <Card tag='article'>
                            <h4>Connect 4</h4>
                            <Link to='/connect4'>Play</Link>
                        </Card>
                        <Card tag='article'>
                            <h4>Checkers</h4>
                            <Link to='/checkers'>Play</Link>
                        </Card>
                    </section>
                    <section>
                        <h3>Multiple Players</h3>
                        <Card tag='article'>
                            <h4>Memory</h4>
                            <Link to='/memory'>Play</Link>
                        </Card>
                        <Card tag='article'>
                            <h4>Dots & Boxes</h4>
                            <Link to='/dotsandboxes'>Play</Link>
                        </Card>
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
