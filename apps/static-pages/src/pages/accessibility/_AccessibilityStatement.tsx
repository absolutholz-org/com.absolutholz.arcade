import { MDXRemote } from 'next-mdx-remote';

import { ArcadePage } from '@arcade/library-components/src/components/ArcadePage';
import { PageGridContainer } from '@arcade/library-components/src/components/PageGrid/PageGridContainer';
import { PageHeadBillboard } from '@arcade/library-components/src/components/PageHeadBillboard';

import { IAccessibilityStatement } from './_AccessibilityStatement.types';

export function AccessibilityStatement({
	source,
}: IAccessibilityStatement): JSX.Element {
	return (
		<ArcadePage pageTitle='Accessibility Statement'>
			<PageHeadBillboard headline='Accessibility Statement'></PageHeadBillboard>
			<PageGridContainer>
				<MDXRemote {...source}></MDXRemote>
			</PageGridContainer>
		</ArcadePage>
	);
}
