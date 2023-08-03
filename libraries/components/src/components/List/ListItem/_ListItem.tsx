import * as S from './_ListItem.styled';
import type { IListItem } from './_ListItem.types';

export function ListItem({
	leadingIcon,
	headline,
	supportingText,
	trailingText,
	trailingIcon,
}: IListItem): JSX.Element {
	return (
		<S.ListItem>
			{leadingIcon && (
				<S.ListItem_LeadingElement>
					<S.ListItem_LeadingIcon as={leadingIcon} />
				</S.ListItem_LeadingElement>
			)}
			<S.ListItem_MainElement>
				<S.ListItem_Headline size='m'>{headline}</S.ListItem_Headline>
				{supportingText && (
					<S.ListItem_SupportingText size='s'>
						{supportingText}
					</S.ListItem_SupportingText>
				)}
			</S.ListItem_MainElement>
			{(trailingText || trailingIcon) && (
				<S.ListItem_TrailingElement>
					{trailingText && (
						<S.ListItem_TrailingText size='xs'>
							{trailingText}
						</S.ListItem_TrailingText>
					)}
					{trailingIcon && (
						<S.ListItem_LeadingIcon as={trailingIcon} />
					)}
				</S.ListItem_TrailingElement>
			)}
		</S.ListItem>
	);
}
