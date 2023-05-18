import { Link } from 'react-router-dom';

import { Button } from '@arcade/library-components/src/components/buttons/Button';
import { PageSection } from '@arcade/library-components/src/components/PageSection';
import { PageGridContainer } from '@arcade/library-components/src/components/PageGrid/PageGridContainer';
import { AppHomeTemplate } from '@arcade/library-components/src/components/PageTemplates/AppHomeTemplate';

export function Home(): JSX.Element {
	return (
		<AppHomeTemplate appImage='green-hills.webp' appName='Scavenger Bingo'>
			<PageSection>
				<PageGridContainer>
					<Button to='lobby'>Play</Button>
				</PageGridContainer>
			</PageSection>
		</AppHomeTemplate>
	);
}
