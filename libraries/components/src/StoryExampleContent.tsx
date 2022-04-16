export function StoryExampleContent({ children = 'Lorem ipsum' }) {
	return (
		<div
			style={{
				background:
					'repeating-linear-gradient(135deg, hsla(0, 100%, 50%, 0.125) 0, hsla(0, 100%, 50%, 0.125) 1rem, transparent 1rem, transparent 2rem)',
				padding: '1rem',
			}}>
			{children}
		</div>
	);
}
