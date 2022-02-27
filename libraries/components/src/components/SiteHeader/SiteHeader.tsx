import { useContext, useState } from 'react';

import * as S from './SiteHeader.styled';
import { Icon } from '../Icon';
import { UserContext } from '../../context/User';

import { ReactComponent as SvgJoystick } from '../../assets/joystick.svg';
import { ReactComponent as SvgLogin } from '@mdi/svg/svg/login-variant.svg';
import { Dialog } from '../Dialog';
import { Button } from '../Button';
import { PlayerForm } from '../PlayerForm';

export function SiteHeader(): JSX.Element {
	const { user, saveUser, clearUser } = useContext(UserContext);
	const [isPlayerDialogOpen, setIsPlayerDialogOpen] = useState(false);

	const closePlayerDialog = () => {
		setIsPlayerDialogOpen(false);
	};

	const openPlayerDialog = () => {
		setIsPlayerDialogOpen(true);
	};

	const handlePlayerFormSubmit = (name: string) => {
		console.log({ name });
		closePlayerDialog();
		saveUser({
			displayName: name,
		});
	};

	return (
		<S.SiteHeader>
			<S.SiteHeaderContainer>
				<div>
					<S.LogoLink to='/'>
						<S.LogoIconText
							slotIconPrefix={<Icon>{SvgJoystick}</Icon>}>
							Arcade
						</S.LogoIconText>
					</S.LogoLink>
				</div>

				<div>
					{user?.displayName ? (
						<button onClick={clearUser}>{user.displayName}</button>
					) : (
						<button onClick={openPlayerDialog}>
							<Icon>{SvgLogin}</Icon>
						</button>
					)}
				</div>
				<Dialog
					isOpen={isPlayerDialogOpen}
					slotFooter={
						<Button form='homePlayer' type='submit'>
							Save
						</Button>
					}>
					<PlayerForm
						formID='homePlayer'
						onSubmit={handlePlayerFormSubmit}
					/>
				</Dialog>
			</S.SiteHeaderContainer>
		</S.SiteHeader>
	);
}