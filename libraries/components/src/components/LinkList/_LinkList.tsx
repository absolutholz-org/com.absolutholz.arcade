import { Stack } from '../Stack';
import { ILinkList } from './_LinkList.types';

export function LinkList({ children }: ILinkList): JSX.Element {
	return (
		<Stack direction='row' spacingX='m' spacingY='xxs'>
			{children}
		</Stack>
	);
}
