import styled from "styled-components";
import { device } from "@/src/style/device";
import { theme } from "@/src/style/theme";

interface PageProps {
    active: boolean;
}

export const WarpperPagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${theme.space[2]};
`;

export const Title = styled.span`
    font-weight: ${theme.typography.weight[4]};
    color: ${theme.color.blueDark};
`;

export const Page = styled.div.withConfig({
    shouldForwardProp: (prop) => !["active"].includes(prop),
})<PageProps>`
border: ${({ active }) =>
    active ? `1px solid ${theme.color.blue};` : undefined}
    font-weight: ${theme.typography.weight[4]};
    color: ${({ active }) =>
        active ? theme.color.blue : theme.color.blueDark};
    padding: ${theme.space[1]} ${theme.space[5]};
    border-radius: ${theme.space[2]};
    text-decoration: none;
    cursor: pointer;
`;
