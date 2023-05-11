export function GridSquare({
	gridSquare: { id, filename, row, col, status },
}: {
	gridSquare: GridSquare;
}): JSX.Element {
	const { dispatch } = useGamePlayContext();

	function handleSignClick() {
		dispatch({
			type: 'SymbolFound',
			payload: {
				row,
				col,
			},
		});
	}

	return (
		<>
			{filename ? (
				<SignButton
					description={id}
					filename={filename}
					name={id}
					onClick={handleSignClick}
					status={status}
				/>
			) : (
				<S.FreeSpace disabled>
					<S.FreeSpace_Text>Free Space</S.FreeSpace_Text>
				</S.FreeSpace>
			)}
		</>
	);
}
