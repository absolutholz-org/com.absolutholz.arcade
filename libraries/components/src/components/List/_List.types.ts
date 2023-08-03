import { IListItem } from './ListItem/_ListItem.types';

export type IList = {
	items: IListItem[];
	isDivided?: boolean;
};
