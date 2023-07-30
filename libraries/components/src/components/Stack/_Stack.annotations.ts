import type { ComponentType, ReactNode } from 'react';

import type { SpaceLevel } from '../../foundations/spacing/space.types';
import type { StackDirection } from './_Stack.types';

type StackPropsBase = {
	children: ReactNode;
	className?: string;
	direction?: StackDirection;
	spacingX?: SpaceLevel;
	spacingY?: SpaceLevel;
};

type StackPropsDefault = {
	shouldResetList?: never;
	// https://stackoverflow.com/questions/55969769/typing-a-dynamic-tag-in-react-with-typescript
	tag?: ComponentType | keyof JSX.IntrinsicElements;
} & StackPropsBase;

type StackPropsResetList = {
	shouldResetList?: boolean;
	tag: 'ul' | 'ol';
} & StackPropsBase;

export type StackProps = StackPropsDefault | StackPropsResetList;
