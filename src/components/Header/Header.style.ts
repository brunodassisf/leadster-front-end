import styled from "styled-components";

import { theme } from "@/src/style/theme";

export const Container = styled.header`
    background-color: ${theme.color.white};
    display: flex;
    justify-content: center;
    padding: ${theme.space[6]} ${theme.space[0]};
`;
