import { ReactNode, useState } from 'react';

import { ReactComponent as IconAddPlayer } from '@mdi/svg/svg/account-plus.svg';
import { ReactComponent as IconLogin } from '@mdi/svg/svg/login.svg';
import { ReactComponent as IconConnectLocal } from '@mdi/svg/svg/laptop.svg';
import { ReactComponent as IconConnectRemote } from '@mdi/svg/svg/lan-connect.svg';

import { ConditionalWrapper } from '@arcade/library-components';

import { PlayerPromptProps } from './PlayerPrompt.annotations';
import * as S from './PlayerPrompt.styled';

export function PlayerPrompt({ showLogin = false, allowLocal = true, allowRemote = true }: PlayerPromptProps): JSX.Element {
	const [selectLocation, setSelectLocation] = useState(false);

	if (allowLocal === false && allowRemote === false) {
		throw new Error('Players must be either local or remote');
	}

	return (
		<>
			<S.PlayerPrompt>
				{selectLocation ? (
					<ConditionalWrapper
						condition={allowLocal && allowRemote}
						wrapper={(children: ReactNode) => <S.PlayerPromptSplitGrid>{children}</S.PlayerPromptSplitGrid>}>
						<>
							{allowLocal && (
								<S.PlayerPromptButton aria-label='Share this device'>
									<S.PlayerPromptIcon icon={<IconConnectLocal />} />
								</S.PlayerPromptButton>
							)}
							{allowRemote && (
								<S.PlayerPromptButton aria-label='Invite a friend'>
									<S.PlayerPromptIcon icon={<IconConnectRemote />} />
								</S.PlayerPromptButton>
							)}
						</>
					</ConditionalWrapper>
				) : (
					<ConditionalWrapper
						condition={showLogin}
						wrapper={(children: ReactNode) => <S.PlayerPromptSplitGrid>{children}</S.PlayerPromptSplitGrid>}>
						<>
							{showLogin && (
								<S.PlayerPromptButton aria-label='Log in'>
									<S.PlayerPromptIcon icon={<IconLogin />} />
								</S.PlayerPromptButton>
							)}
							<S.PlayerPromptButton aria-label='Add a player' onClick={() => setSelectLocation(true)}>
								<S.PlayerPromptIcon icon={<IconAddPlayer />} />
							</S.PlayerPromptButton>
						</>
					</ConditionalWrapper>
				)}
			</S.PlayerPrompt>
		</>
	);
}
