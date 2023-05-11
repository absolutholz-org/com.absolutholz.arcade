import { Link } from 'react-router-dom';

import { PageSection } from '@arcade/library-components';
import { PageGridContainer } from '@arcade/library-components/src/components/PageGrid/PageGridContainer';
import { AppHomeTemplate } from '@arcade/library-components/src/components/PageTemplates/AppHomeTemplate';

export function Home(): JSX.Element {
	return (
		<AppHomeTemplate appImage='green-hills.webp' appName='Scavenger Bingo'>
			<PageSection>
				<PageGridContainer>
					<Link to='lobby'>Play</Link>
				</PageGridContainer>
			</PageSection>
		</AppHomeTemplate>
	);
}
