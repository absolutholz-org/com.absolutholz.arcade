import { SyntheticEvent } from 'react';

import { CollapsibleProps } from './Collapsible.annotations';
import * as S from './Collapsible.styled';

import { ReactComponent as ChevronIcon } from '@mdi/svg/svg/chevron-down.svg';

export function Collapsible({
	children,
	slotSummary,
	state = 'collapsed',
	onCollapse,
	onExpand,
	...props
}: CollapsibleProps): JSX.Element {
	const handleToggle = (event: SyntheticEvent<HTMLDetailsElement, Event>) => {
		// target type: https://freshman.tech/snippets/typescript/fix-value-not-exist-eventtarget/
		const target = event.target as HTMLDetailsElement;
		if (target.open) {
			onExpand();
		} else {
			onCollapse();
		}
	};

	return (
		<S.Collapsible onToggle={handleToggle} open={state === 'expanded'} {...props}>
			<S.CollapsibleSummary>
				<S.CollapsibleSummaryIcon icon={<ChevronIcon />} />
				{slotSummary}
			</S.CollapsibleSummary>
			<S.CollapsibleContent>{children}</S.CollapsibleContent>
		</S.Collapsible>
	);
}
