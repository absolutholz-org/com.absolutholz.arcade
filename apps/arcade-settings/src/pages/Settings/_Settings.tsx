import { PageSection } from '@arcade/library-components/src/components/PageSection';
import { PageGridContainer } from '@arcade/library-components/src/components/PageGrid/PageGridContainer';
import { PageWithFooterTemplate } from '@arcade/library-components/src/components/templates/PageWithFooterTemplate';
import { PageHeadBillboard } from '@arcade/library-components/src/components/PageHeadBillboard';

export function Settings(): JSX.Element {
	return (
		<PageWithFooterTemplate pageTitle='Settings'>
			<PageHeadBillboard
				headlinePrefix='absolutholz Arcade'
				headline='Settings'
			/>

			<PageSection>
				<PageGridContainer>
				</PageGridContainer>
			</PageSection>
		</PageWithFooterTemplate>
	);
}
