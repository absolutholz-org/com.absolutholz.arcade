import { ComponentType, ReactNode } from 'react';
import type { SpaceLevel } from '../Space/_Space.types';

export type StackDirection = 'column' | 'row';

type StackPropsBase = {
	children: ReactNode;
	className?: string;

	direction?: StackDirection;
	spaceLevelX?: SpaceLevel;
	spaceLevelY?: SpaceLevel;

	// https://stackoverflow.com/questions/55969769/typing-a-dynamic-tag-in-react-with-typescript
	tag?: ComponentType | keyof JSX.IntrinsicElements;
};

type StackPropsDefault = {
	shouldResetList?: never;
} & StackPropsBase;

type StackPropsResetList = {
	shouldResetList?: boolean;
	tag: 'ul' | 'ol';
} & StackPropsBase;

export type StackProps = StackPropsDefault | StackPropsResetList;
