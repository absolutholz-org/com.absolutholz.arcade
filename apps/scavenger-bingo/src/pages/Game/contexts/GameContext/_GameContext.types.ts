type GameActionSymbolFound = {
	type: 'MARK_SYMBOL_AS_FOUND';
	payload: {
		position: string;
	};
};

export type GameAction = GameActionSymbolFound;

export type GameDispatch = React.Dispatch<GameAction>;
