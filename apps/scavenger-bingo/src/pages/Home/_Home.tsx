import { Link } from 'react-router-dom';

import { Button } from '@arcade/library-components/src/components/Button';
import { PageSection } from '@arcade/library-components/src/components/PageSection';
import { PageGridContainer } from '@arcade/library-components/src/components/PageGrid/PageGridContainer';
import { AppHomeTemplate } from '@arcade/library-components/src/components/PageTemplates/AppHomeTemplate';
import { Typography } from '@arcade/library-components/src/components/Typography';

export function Home(): JSX.Element {
	return (
		<AppHomeTemplate appImage='green-hills.webp' appName='Scavenger Bingo'>
			<PageSection>
				<PageGridContainer>
					<Typography size='xl'>
						Grab a board, and start an exciting adventure with
						Scavenger Bingo!
					</Typography>
					<p>
						It's a super fun way to test your observation skills and
						problem-solving ability while having a great time with
						your family and friends.
					</p>
					<Button
						size='l'
						to='/lobby'
						variant='contained'
						text='Play Scavenger Bingo'
					/>
				</PageGridContainer>
			</PageSection>
			<PageSection omitTopSpacing>
				<PageGridContainer>
					<Typography size='l' as='h2'>
						It looks like you have some unfinished games.
					</Typography>
					<p>
						Would you like to{' '}
						<Link to='games'>keep playing them</Link>?
					</p>
				</PageGridContainer>
			</PageSection>
		</AppHomeTemplate>
	);
}
