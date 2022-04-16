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
						</S.PlayersContainer>
					</S.Section>

					<S.Section>
						<Headline100 as='h2'>Game Settings</Headline100>
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
