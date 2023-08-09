import { ComponentType, ReactNode } from 'react';

import { SpaceLevel } from '../../foundations/spacing/space.types';

export type StackDirection = 'column' | 'row';

type IStackBase = {
	children: ReactNode;
	className?: string;
	direction?: StackDirection;
	spacingX?: SpaceLevel;
	spacingY?: SpaceLevel;
};

type IStackDefault = {
	shouldResetList?: never;
	// https://stackoverflow.com/questions/55969769/typing-a-dynamic-tag-in-react-with-typescript
	tag?: ComponentType | keyof JSX.IntrinsicElements;
} & IStackBase;

type IStackResetList = {
	shouldResetList?: boolean;
	tag: 'ul' | 'ol';
} & IStackBase;

export type IStack = IStackDefault | IStackResetList;
