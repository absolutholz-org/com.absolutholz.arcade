import { getGroupedGames } from '@arcade/library-common/src/gameConfig';

export async function getStaticProps() {
	const games = getGroupedGames();

	return { props: { games } };
}
