import { Link } from 'react-router-dom';

import { Billboard, BillboardHeadline, ContentContainer, LogoText, VerticallyPaddedContainer } from '@arcade/library-components';

export function AccessibilityStatement(): JSX.Element {
	return (
		<main>
			<Billboard>
				<Link to='/'>
					<LogoText />
				</Link>
				<BillboardHeadline>Accessibility Statement</BillboardHeadline>
			</Billboard>
			<ContentContainer>
				<VerticallyPaddedContainer>
					<p>This is an accessibility statement from absolutholz Arcade.</p>
					<h2>Conformance status</h2>
					<p>
						The{' '}
						<a href='https://www.w3.org/WAI/standards-guidelines/wcag/' target='_blank'>
							Web Content Accessibility Guidelines (WCAG)
						</a>{' '}
						defines requirements for designers and developers to improve accessibility for people with disabilities.
						It defines three levels of conformance: Level A, Level AA, and Level AAA. absolutholz Arcade is partially
						conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully
						conform to the accessibility standard.
					</p>
					<h2>Date</h2>
					<p>
						This statement was created on <time dateTime='2022-08-20'>20 August 2022</time> using the{' '}
						<a href='https://www.w3.org/WAI/planning/statements/' target='_blank'>
							W3C Accessibility Statement Generator Tool
						</a>
						.
					</p>
				</VerticallyPaddedContainer>
			</ContentContainer>
		</main>
	);
}
