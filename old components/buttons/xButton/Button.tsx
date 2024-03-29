// import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
// import * as Styled from './Button.styled';

// type ButtonProps<T extends ElementType> = {
//  renderAs?: T;
//  isLoading?: boolean;
//  isCompleted?: boolean;
//  disabled?: boolean;
//  children: ReactNode;
// } & ComponentPropsWithoutRef<T>;

// // 💡 In generic the HTML type of component will be specified. And by default it is button
// export const Button = <T extends ElementType = 'button'>({
//  renderAs,
//  isLoading,
//  isCompleted,
//  children,
//  ...rest
// }: ButtonProps<T>): JSX.Element => {
//  return (
//     // @ts-ignore
//    <Styled.BTN
//      as={renderAs}
//      isLoading={isLoading}
//      isCompleted={isCompleted}
//      {...rest}
//    >
//      {children}
//    </Styled.BTN>
//  );
// };

import { ElementType } from 'react';

import type { ButtonProps } from './Button.annotations';
import * as S from './Button.styled';

export function Button<T extends ElementType = 'button'>({
	renderAs,
	children,
	inline,
	variant,
	...props
}: ButtonProps<T>): JSX.Element {
	return (
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		<S.Button as={renderAs} $inline={inline} $variant={variant} {...props}>
			{children}
		</S.Button>
	);
}
