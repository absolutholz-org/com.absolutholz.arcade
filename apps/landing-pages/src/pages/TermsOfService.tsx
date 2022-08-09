import {
	Headline400,
	PageLayoutContainer,
	Theme,
} from '@arcade/library-components';

export function TermsOfService(): JSX.Element {
	return (
		<main>
			<Theme $theme='alt'>
				<PageLayoutContainer>
					<Headline400 as='h1'>Terms of Service</Headline400>
				</PageLayoutContainer>
			</Theme>
		</main>
	);
}
