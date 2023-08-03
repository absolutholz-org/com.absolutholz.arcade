import { ListItem } from './ListItem/_ListItem';
import * as S from './_List.styled';
import type { IList } from './_List.types';

export function List({ items, isDivided = false }: IList): JSX.Element {
	return (
		<S.List isDivided={isDivided}>
			{items?.length > 0 &&
				items.map(
					(
						{ leadingIcon, headline, supportingText, trailingText },
						index
					) => (
						<ListItem
							key={`list-item_${index}`}
							leadingIcon={leadingIcon}
							headline={headline}
							supportingText={supportingText}
							trailingText={trailingText}
						/>
					)
				)}
		</S.List>
	);
}
