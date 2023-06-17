import type { ReactNode } from "react";

export type PageHeadBillboardProps = {
    headline: ReactNode;
    headlinePrefix?: ReactNode;
    headlineSuffix?: ReactNode;
    children?: ReactNode;
}