import { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
	Billboard,
	BillboardHeadline,
	Button,
	ContentContainer,
	FormFooter,
	LogoText,
	SiteFooter,
	VerticallyPaddedContainer,
} from '@arcade/library-components';
import { getGame } from '@arcade/library-common';

import { FieldsetSize } from '../components';

const game = getGame('tictactoe');

export function Home() {
	const navigate = useNavigate();

	const { imgUri } = game!;
	const srcset = [400, 600, 800, 1200, 1600]
		.map((size) => `${import.meta.env.VITE_IMAGE_DOMAIN}${imgUri.replace('/original/', `/${size}/`)} ${size}w `)
		.join(',');

	const handleStartGame = (event: FormEvent) => {
		event.preventDefault();
		navigate('lobby');
	};

	return (
		<>
			<main>
				<Billboard slotBackground={<img aria-hidden={true} src={game?.imgUri} srcSet={srcset} />}>
					<Link to='/'>
						<LogoText />
					</Link>
					<BillboardHeadline>{game?.name}</BillboardHeadline>
				</Billboard>

				<ContentContainer>
					<VerticallyPaddedContainer spacing={200}>
						<form onSubmit={handleStartGame}>
							<FieldsetSize />
							<FormFooter>
								<Button variant='filled'>Let's play!</Button>
							</FormFooter>
						</form>
					</VerticallyPaddedContainer>
				</ContentContainer>
			</main>

			<SiteFooter />
		</>
	);
}
