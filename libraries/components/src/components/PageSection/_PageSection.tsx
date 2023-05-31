import { PageSectionProps } from './_PageSection.annotations';
import * as S from './_PageSection.styled';

export function PageSection({
	children,
	omitTopSpacing = false,
}: PageSectionProps): JSX.Element {
	return (
		<S.PageSection omitTopSpacing={omitTopSpacing}>
			{children}
		</S.PageSection>
	);
}
