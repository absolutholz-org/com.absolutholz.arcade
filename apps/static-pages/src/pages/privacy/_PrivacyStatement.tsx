import { MDXRemote } from 'next-mdx-remote';

import { ArcadePage } from '@arcade/library-components/src/components/ArcadePage';
import { PageGridContainer } from '@arcade/library-components/src/components/PageGrid/PageGridContainer';
import { PageHeadBillboard } from '@arcade/library-components/src/components/PageHeadBillboard';
import { PageSection } from '@arcade/library-components/src/components/PageSection';

import { IPrivacyStatement } from './_PrivacyStatement.types';

export function PrivacyStatement({ source }: IPrivacyStatement): JSX.Element {
	return (
		<ArcadePage pageTitle='Privacy Statement'>
			<main>
				<PageHeadBillboard headline='Privacy Statement'></PageHeadBillboard>
				<PageGridContainer>
					<PageSection>
						<MDXRemote {...source}></MDXRemote>
					</PageSection>
				</PageGridContainer>
			</main>
		</ArcadePage>
	);
}
