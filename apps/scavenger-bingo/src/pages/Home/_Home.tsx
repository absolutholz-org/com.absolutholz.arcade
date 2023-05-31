import { Button } from '@arcade/library-components/src/components/Button';
import { PageSection } from '@arcade/library-components/src/components/PageSection';
import { PageGridContainer } from '@arcade/library-components/src/components/PageGrid/PageGridContainer';
import { AppHomeTemplate } from '@arcade/library-components/src/components/PageTemplates/AppHomeTemplate';
import { Stack } from '@arcade/library-components/src/components/Stack';

export function Home(): JSX.Element {
	return (
		<AppHomeTemplate appImage='green-hills.webp' appName='Scavenger Bingo'>
			<PageSection>
				<PageGridContainer>
					<p>
						In this game, you get a special bingo board with a few
						things you have to find. You have to look for these
						things, and when you find them, you mark them on your
						board. You win the game if you can mark all the things
						in a row, column or diagonal, just like in regular
						bingo. It's a super fun way to test your observation
						skills and problem-solving ability while having a great
						time with your family and friends. So, grab your board,
						and let's start an exciting adventure with Scavenger
						Bingo!
					</p>
				</PageGridContainer>
			</PageSection>
			<PageSection omitTopSpacing>
				<PageGridContainer>
					<Stack direction='row' spaceLevelY='m' spaceLevelX='m'>
						<Button
							size='l'
							to='lobby'
							variant='contained'
							text='Play'
						/>
						<Button
							size='l'
							to='games'
							variant='outlined'
							text='Continue'
						/>
					</Stack>
				</PageGridContainer>
			</PageSection>
		</AppHomeTemplate>
	);
}
