import { Link } from 'react-router-dom';

import { ColorSchemeToggler } from '../ColorSchemeToggler';
import { PageSection } from '../PageSection';
import { Stack } from '../Stack';
import { Typography } from '../Typography';
import type { SiteFooterProps } from './_SiteFooter.annotations';
import * as S from './_SiteFooter.styled';
import { Theme } from '../Theme';

export function SiteFooter({ appName }: SiteFooterProps): JSX.Element {
	return (
		<>
			<Theme themeSetId='alt'>
				<S.SiteFooter>
					<PageSection>
						<Stack spaceLevelY='l'>
							<Stack spaceLevelY='s' tag='nav'>
								<Typography size='l'>{ appName }</Typography>
								<Stack direction='row' shouldResetList spaceLevelX='m' spaceLevelY='xxs' tag='ul'>
									<Link to='/'>Home</Link>
									<Link to='/lobby/'>New Game Lobby</Link>
									<Link to='/games/'>Unfinished Games</Link>
								</Stack>
							</Stack>
							<div>
								Site Color Scheme: <ColorSchemeToggler />
							</div>
						</Stack>
					</PageSection>
				</S.SiteFooter>
			</Theme>
			<Theme themeSetId='alt2'>
				<S.SiteFooter>
					<PageSection>
						<a href='https://arcade.absolutholz.de/'>absolutholz Arcade</a>
					</PageSection>
				</S.SiteFooter>
			</Theme>
		</>
	);
}
