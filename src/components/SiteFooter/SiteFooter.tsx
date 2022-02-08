import { PageLayoutContainer } from '../PageLayoutContainer';
import { ISiteFooterProps } from './ISiteFooter';
import * as S from './SiteFooter.styled';

export function SiteFooter ({}: ISiteFooterProps): JSX.Element {
	return (
		<PageLayoutContainer>
			<S.SiteFooter>
			</S.SiteFooter>
		</PageLayoutContainer>
	)
}
