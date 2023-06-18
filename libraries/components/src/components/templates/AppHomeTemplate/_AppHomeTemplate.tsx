import { ColorSchemeToggler } from '../../ColorSchemeToggler';
import { PageGridContainer } from '../../PageGrid/PageGridContainer';
import { PageHeadBillboard } from '../../PageHeadBillboard';
import { PageSection } from '../../PageSection';
import { SiteTemplate } from '../SiteTemplate';
import type { AppHomeTemplateProps } from './_AppHomeTemplate.annotations';

export function AppHomeTemplate({
	appName,
	children,
}: AppHomeTemplateProps): JSX.Element {
	return (
		<SiteTemplate pageTitle={appName}>
			<PageHeadBillboard
				headline={appName}
			/>
			{children}
			<PageSection omitTopSpacing>
				<PageGridContainer>
					<ColorSchemeToggler />
				</PageGridContainer>
			</PageSection>
		</SiteTemplate>
	);
}
