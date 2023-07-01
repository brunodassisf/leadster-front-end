import styled from "styled-components";
import { device } from "@/src/style/device";
import { theme } from "@/src/style/theme";
import { Container } from "@/src/style/globalStyle";

export const Section = styled(Container)`
    background-color: ${theme.color.white};
    padding: ${theme.space[10]};
`;

export const Controls = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: ${theme.space[10]};
    position: relative;
    margin-bottom: ${theme.space[10]};
    & hr {
        position: absolute;
        bottom: -${theme.space[10]};
        width: 100%;
        height: ${theme.space[1]};
        border: none;
        background-color: ${theme.color.grayLight};
    }
    @media ${device.md} {
        flex-direction: column;
        align-items: start;
        justify-content: space-between;
    }
`;

export const Leads = styled.article`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: ${theme.space[10]};
    margin-top: ${theme.space[15]};
    width: 100%;
`;
