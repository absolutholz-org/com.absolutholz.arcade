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

import { IButtonProps } from './IButton';
import * as S from './Button.styled';
import { ElementType } from 'react';

export function Button<T extends ElementType = 'button'>({
	renderAs,
	children,
	inline,
	type = 'button',
	variant,
	...props
}: IButtonProps<T>): JSX.Element {
	return (
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		<S.Button
			as={renderAs}
			$inline={inline}
			$variant={variant}
			type={type}
			{...props}>
			{children}
		</S.Button>
	);
}
