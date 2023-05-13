import { PageHeadlineBillboard } from '../../PageHeadlineBillboard';
import { SiteTemplate } from '../SiteTemplate';
import { AppHomeTemplateProps } from './_AppHomeTemplate.types';

export function AppHomeTemplate({
	appImage,
	appName,
	children,
}: AppHomeTemplateProps): JSX.Element {
	return (
		<SiteTemplate pageTitle={appName}>
			<PageHeadlineBillboard
				backgroundImage={appImage}
				headlineText={appName}
			/>
			{children}
		</SiteTemplate>
	);
}
