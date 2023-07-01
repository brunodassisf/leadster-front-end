import styled from "styled-components";
import { device } from "@/src/style/device";
import { theme } from "@/src/style/theme";

export const Content = styled.div`
    border-radius: ${theme.space[5]};
    box-shadow: 0px 35px 35px -5px #e9e7e7;
    max-width: 350px;
    width: 100%;
    & img {
        border-top-right-radius: ${theme.space[5]};
        border-top-left-radius: ${theme.space[5]};
        width: 100%;
        height: auto;
    }
    & h6 {
        font-weight: ${theme.typography.weight[6]};
        color: ${theme.color.blueDark};
        padding: ${theme.space[9]} ${theme.space[10]};
        font-size: ${theme.typography.size[2]};
        line-height: 18px;
    }
`;
