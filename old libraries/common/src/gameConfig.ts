export interface IGame {
	id: string;
	imgUri: string;
	url: string;
	name: string;
	players: 'single' | 'two' | 'multi';
}

const GAMES: IGame[] = [
	{
		id: 'sudoku',
		imgUri: '/img/bg/original/purple-mountain-lake.webp',
		url: 'https://sudoku.absolutholz.de/',
		name: 'Sudoku',
		players: 'single',
	},
	{
		id: 'minesweeper',
		imgUri: '/img/bg/original/purple-flowers-sunset.webp',
		url: 'https://minesweeper.absolutholz.de/',
		name: 'Minesweeper',
		players: 'single',
	},
	{
		id: 'tictactoe',
		imgUri: '/img/bg/original/green-hills.webp',
		url: '/tictactoe/',
		name: 'Tic Tac Toe',
		players: 'two',
	},
	{
		id: 'connect4',
		imgUri: '/img/bg/original/desert-river.webp',
		url: '/connect4/',
		name: 'Connect 4',
		players: 'two',
	},
	{
		id: 'checkers',
		imgUri: '/img/bg/original/dead-tree-prairie.webp',
		url: '/checkers/',
		name: 'Checkers',
		players: 'two',
	},
	{
		id: 'memory',
		imgUri: '/img/bg/original/autumn-trees.webp',
		url: 'https://memory.absolutholz.de/',
		name: 'Memory',
		players: 'multi',
	},
	{
		id: 'uno',
		imgUri: '/img/bg/original/bright-forest-stump.webp',
		url: 'https://uno.absolutholz.de/',
		name: 'Uno',
		players: 'multi',
	},
	{
		id: 'dotsandboxes',
		imgUri: '/img/bg/original/autumn-river.webp',
		url: '/dotsandboxes/',
		name: 'Dots & Boxes',
		players: 'multi',
	},
	{
		id: 'travelbingo',
		imgUri: '/img/bg/original/dusk-hills-river.webp',
		url: '/travelbingo/',
		name: 'Travel Bingo',
		players: 'multi',
	},
];

export function getGroupedGames(): Record<'single' | 'two' | 'multi', IGame[]> {
	const games: Record<'single' | 'two' | 'multi', IGame[]> = {
		single: [],
		two: [],
		multi: [],
	};

	GAMES.forEach((game: IGame) => {
		games[game.players].push(game);
	});

	return games;
}

export function getGame(id: string) {
	return GAMES.find((game: IGame) => {
		return game.id === id;
	});
}
