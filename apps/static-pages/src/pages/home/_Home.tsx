import type { IGame } from '@arcade/library-common/src/gameConfig';
import { ArcadePage } from '@arcade/library-components/src/components/ArcadePage';
import { PageGridContainer } from '@arcade/library-components/src/components/PageGrid';
import { PageSection } from '@arcade/library-components/src/components/PageSection';
import { Typography } from '@arcade/library-components/src/components/Typography';

import { IHome } from './_Home.types';
import { LinkList } from '@arcade/library-components/src/components/LinkList';

function GameSection({
	headline,
	games,
}: {
	headline: string;
	games: IGame[];
}): JSX.Element {
	return (
		<PageGridContainer>
			<PageSection omitSpacing='top' as='section'>
				<Typography as='h2' size='xl'>
					{headline}
				</Typography>
				<LinkList>
					{games.map(({ name, url, imgUri }) => (
						<Typography as='h3' key={`game_${name}`} size='xxl'>
							<a href={url}> {name}</a>
						</Typography>
					))}
				</LinkList>
			</PageSection>
		</PageGridContainer>
	);
}

export function Home({ games }: IHome) {
	return (
		<ArcadePage>
			<main>
				<GameSection headline='Single Player' games={games.single} />
				<GameSection headline='Two Players' games={games.two} />
				<GameSection headline='Multiple Players' games={games.multi} />
			</main>
		</ArcadePage>
	);
}
