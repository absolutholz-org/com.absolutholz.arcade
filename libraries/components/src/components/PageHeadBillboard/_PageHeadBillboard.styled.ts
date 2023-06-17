import styled from "@emotion/styled";

import { Typography } from "../Typography";
import { space } from "../Space";
import { Theme } from "../Theme";

export const PageHeadBillboard = styled(Theme)`
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding-block: ${space('xxxl')} ${space('xl')};
`;

export const PageHeadBillboard_H1 = styled(Typography)`
    margin: 0;
`;
