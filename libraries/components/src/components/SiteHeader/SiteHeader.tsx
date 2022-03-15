import { useContext, useState } from 'react';

import * as S from './SiteHeader.styled';
import { Icon } from '../Icon';
import { UserContext } from '@arcade/common/context/User';

// import { ReactComponent as SvgJoystick } from '@arcade/common/assets/joystick.svg';
// import { ReactComponent as SvgLogin } from '@mdi/svg/svg/login-variant.svg';

import SvgLogin from 'mdi-react/LoginVariantIcon';

function SvgJoystick(): JSX.Element {
	return <>JS</>;
}

import { Dialog } from '../Dialog';
import { Button } from '../Button';
import { PlayerForm } from '../PlayerForm';
import { ColorSchemeToggler } from '../ColorSchemeToggler';

export function SiteHeader({ ...props }): JSX.Element {
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
		<S.SiteHeader {...props}>
			<S.SiteHeaderContainer>
				<div>
					<S.LogoLink to='/'>
						{/* <S.LogoIconText
							slotIconPrefix={<Icon icon={SvgJoystick} />}> */}
						<S.Logo />
						{/* </S.LogoIconText> */}
					</S.LogoLink>
				</div>

				<S.ActionBlock>
					<ColorSchemeToggler />
					{user?.displayName ? (
						<button onClick={clearUser}>{user.displayName}</button>
					) : (
						<button onClick={openPlayerDialog}>
							{/* <Icon>{SvgLogin}</Icon> */}
							<SvgLogin />
						</button>
					)}
				</S.ActionBlock>

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
