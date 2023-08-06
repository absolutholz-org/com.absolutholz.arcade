import type { ReactNode } from 'react';

export type IPageHeadBillboard = {
	headline: ReactNode;
	headlinePrefix?: ReactNode;
	headlineSuffix?: ReactNode;
	children?: ReactNode;
};
