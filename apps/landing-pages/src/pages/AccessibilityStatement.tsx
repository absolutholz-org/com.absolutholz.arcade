import {
	Headline400,
	PageLayoutContainer,
	Theme,
} from '@arcade/library-components';

export function AccessibilityStatement(): JSX.Element {
	return (
		<main>
			<Theme $theme='alt'>
				<PageLayoutContainer>
					<Headline400 as='h1'>Accessibility Statement</Headline400>
				</PageLayoutContainer>
			</Theme>
		</main>
	);
}
