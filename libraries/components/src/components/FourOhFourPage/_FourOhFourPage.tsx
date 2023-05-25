import { PageGridContainer } from '../PageGrid';
import { PageSection } from '../PageSection';
import { SiteTemplate } from '../PageTemplates/SiteTemplate';
import { Stack } from '../Stack';
import { Typography } from '../Typography';

export function FourOhFourPage(): JSX.Element {
	return (
		<SiteTemplate pageTitle={'Page not found'}>
			<PageSection>
				<PageGridContainer>
					<Stack spaceLevelY='m'>
						<Typography level={2}>4oh4</Typography>
						<Typography level={0}>
							Well that's not right.
						</Typography>
					</Stack>
				</PageGridContainer>
			</PageSection>
		</SiteTemplate>
	);
}
