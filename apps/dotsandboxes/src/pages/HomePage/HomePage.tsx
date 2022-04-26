import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import {
	Button,
	Headline100,
	PageLayoutContainer,
	SiteFooter,
} from '@arcade/library-components';

import { PlayerConfig } from '../../components/PlayerConfig';
import * as S from './HomePage.styled';
import { GameSizeSelector } from '../../components/GameSizeSelector';

export function HomePage(): JSX.Element {
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

						<PlayerConfig />
					</S.Section>

					<S.Section>
						<Headline100 as='h2'>Size</Headline100>

						<GameSizeSelector />
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
