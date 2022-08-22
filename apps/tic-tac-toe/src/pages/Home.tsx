import { Link } from 'react-router-dom';

import { Billboard, BillboardHeadline, LogoText, SiteFooter } from '@arcade/library-components';

export function Home() {
	return (
		<>
			<main>
				<Billboard>
					<Link to='/'>
						<LogoText />
					</Link>
					<BillboardHeadline>Tic Tac Toe</BillboardHeadline>
				</Billboard>
			</main>

			<SiteFooter />
		</>
	);
}
