import React, { useContext, useState } from 'react';
import { PageLayoutContainer } from '../PageLayoutContainer';

import * as S from './SiteHeader.styled';
import { LogoText } from '../logos/LogoText';
// // import { Icon } from "../Icon";
// import { UserContext } from '@arcade/library-common';

// // import { ReactComponent as SvgJoystick } from '@arcade/library-common/assets/joystick.svg';
// // import { ReactComponent as SvgLogin } from '@mdi/svg/svg/login-variant.svg';

// import SvgLogin from 'mdi-react/LoginVariantIcon';

// import { Dialog } from '../Dialog';
// import { Button } from '../buttons/Button';
// import { PlayerForm } from '../PlayerForm';
// // import { ColorSchemeToggler } from "../ColorSchemeToggler";

export function SiteHeader({ ...props }): JSX.Element {
	// const { user, saveUser, clearUser } = useContext(UserContext);
	// const [isPlayerDialogOpen, setIsPlayerDialogOpen] = useState(false);

	// const closePlayerDialog = () => {
	// 	setIsPlayerDialogOpen(false);
	// };

	// const openPlayerDialog = () => {
	// 	setIsPlayerDialogOpen(true);
	// };

	// const handlePlayerFormSubmit = (name: string) => {
	// 	closePlayerDialog();
	// 	saveUser({
	// 		displayName: name,
	// 	});
	// };

	return (
		<S.SiteHeader>
			<PageLayoutContainer>
				<a href='http://arcade.absolutholz.de'>
					<LogoText />
				</a>
			</PageLayoutContainer>
		</S.SiteHeader>
		// <S.SiteHeader {...props}>
		// 	<S.SiteHeaderContainer>
		// 		<div>
		// 			<S.LogoLink to='/'>
		// 				{/* <S.LogoIconText
		// 					slotIconPrefix={<Icon icon={SvgJoystick} />}> */}
		// 				<S.Logo />
		// 				{/* </S.LogoIconText> */}
		// 			</S.LogoLink>
		// 		</div>
		// 	</S.SiteHeaderContainer>
		// </S.SiteHeader>
	);
}
