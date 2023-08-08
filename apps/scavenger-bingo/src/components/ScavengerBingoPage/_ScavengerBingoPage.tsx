import { ArcadePage } from '@arcade/library-components/src/components/ArcadePage';

import { IScavengerBingoPage } from './_ScavengerBingoPage.types';
import { ScavengerBingoFooter } from '../ScavengerBingoFooter';

export function ScavengerBingoPage({
	children,
	pageTitle,
}: IScavengerBingoPage): JSX.Element {
	return (
		<ArcadePage pageTitle={pageTitle}>
			{children}
			<ScavengerBingoFooter />
		</ArcadePage>
	);
}
