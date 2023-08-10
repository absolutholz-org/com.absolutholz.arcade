import { IPageSection } from './_PageSection.types';
import * as S from './_PageSection.styled';

export function PageSection({
	as,
	children,
	omitSpacing,
	spacingSize = 'xl',
}: IPageSection): JSX.Element {
	return (
		<S.PageSection
			as={as}
			omitSpacing={omitSpacing}
			spacingSize={spacingSize}>
			{children}
		</S.PageSection>
	);
}
