// import { Children, cloneElement, ComponentType } from 'react';
import styled, { css } from 'styled-components';

// // const withColor = (Component) => styled(Component)`
// // 	background: hsl(var(--theme ${({ theme }) => theme}));
// // 	color: hsl(var(--theme-${({ theme }) => theme}-primary));
// // `;

// function withTheme<T>(Component: ComponentType<T>) {
// 	return styled(Component)`
// 		background: hsl(var(--theme-${({ theme }) => theme}));
// 		color: hsl(var(--theme-${({ theme }) => theme}-primary));
// 	`;
// }

// export const Theme = withTheme(
// 	({ className, children }: { className: string; children: unknown }) => {
// 		if (children?.length > 0) {
// 			return Children.map(children, (child, i) => {
// 				return cloneElement(child, { className });
// 			});
// 		} else {
// 			return cloneElement(children, { className });
// 		}
// 	}
// );

import { color } from '../../foundations/colors/color';
import type { ThemeProps } from './Theme.annotations';

export const Theme = styled.div<ThemeProps>`
	${({ $theme = 'base' }) => css`
		--role-surface: var(--theme-${$theme});
		--role-primary: var(--theme-${$theme}-primary);
		--role-secondary: var(--theme-${$theme}-secondary);
		--role-tertiary: var(--theme-${$theme}-tertiary);
		--role-accent: var(--theme-${$theme}-accent);
		--role-error: var(--theme-${$theme}-error);
	`}

	background: ${color('surface')};
	color: ${color('primary')};
`;
