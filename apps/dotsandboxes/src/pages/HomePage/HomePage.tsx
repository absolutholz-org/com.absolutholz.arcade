import { FormEvent, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import {
	Button,
	Headline100,
	PageLayoutContainer,
	SiteFooter,
} from '@arcade/library-components';

import { PlayerConfig } from '../../components/PlayerConfig';
import { PlayersContext } from '../../context/Players';
import * as S from './HomePage.styled';

export function HomePage(): JSX.Element {
	const { player1, setPlayer1, player2, setPlayer2 } =
		useContext(PlayersContext);
	const navigate = useNavigate();

	const handleStartGame = (event: FormEvent) => {
		event.preventDefault();
		navigate('game');
	};

	return (
		<>
			<main>
				<PageLayoutContainer>
					<S.Section>
						<Headline100 as='h2'>Players</Headline100>

						<S.PlayersContainer>
							<PlayerConfig
								id='1'
								player={player1}
								setPlayer={setPlayer1}
							/>
							<PlayerConfig
								id='2'
								player={player2}
								setPlayer={setPlayer2}
							/>

							{/* <form onSubmit={handleStartGame}>
						<fieldset>
							<legend>Player 1</legend>
							<label htmlFor='player1-name'>
								<div>Name</div>
								<input
									id='player1-name'
									name='player1-name'
									type='text'
									value='Player 1'
								/>
							</label>
							<label htmlFor='player1-color'>
								<div>Color</div>
								<input
									id='player1-color'
									name='player1-color'
									type='color'
									value='#b22222'
								/>
							</label>
						</fieldset>

						<fieldset>
							<legend>Player 2</legend>
							<label htmlFor='player2-name'>
								<div>Name</div>
								<input
									id='player2-name'
									name='player2-name'
									type='text'
									value='Player 2'
								/>
							</label>
							<label htmlFor='player2-color'>
								<div>Color</div>
								<input
									id='player2-color'
									name='player2-color'
									type='color'
									value='#228b22'
								/>
							</label>
						</fieldset>

						<Button type='submit'>Start Game</Button>
					</form> */}
						</S.PlayersContainer>
					</S.Section>

					<S.Section>
						<Button onClick={handleStartGame}>Start Game</Button>
					</S.Section>
				</PageLayoutContainer>
			</main>
			<SiteFooter
				slotHomeLinkPrefix={
					<span>
						<span>Dots & Boxes</span> is a part of the{' '}
					</span>
				}
			/>
		</>
	);
}
