import {
	Headline400,
	PageLayoutContainer,
	Theme,
} from '@arcade/library-components';

export function PrivacyPolicy(): JSX.Element {
	return (
		<main>
			<Theme $theme='alt'>
				<PageLayoutContainer>
					<Headline400 as='h1'>Privacy Policy</Headline400>
				</PageLayoutContainer>
			</Theme>
		</main>
	);
}
