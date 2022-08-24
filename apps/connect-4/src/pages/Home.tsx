import { Link } from 'react-router-dom';

import { Billboard, BillboardHeadline, LogoText, SiteFooter } from '@arcade/library-components';
import { getGame } from '@arcade/library-common';

const game = getGame('connect4');

export function Home() {
	const { imgUri } = game!;
	const srcset = [400, 600, 800, 1200, 1600]
		.map((size) => `${import.meta.env.VITE_IMAGE_DOMAIN}${imgUri.replace('/original/', `/${size}/`)} ${size}w `)
		.join(',');

	return (
		<>
			<main>
				<Billboard slotBackground={<img src={game?.imgUri} srcSet={srcset} />}>
					<Link to='/'>
						<LogoText />
					</Link>
					<BillboardHeadline>{game?.name}</BillboardHeadline>
				</Billboard>
			</main>

			<SiteFooter />
		</>
	);
}
