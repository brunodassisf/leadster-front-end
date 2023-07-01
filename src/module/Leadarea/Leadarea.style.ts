import styled from "styled-components";
import { device } from "@/src/style/device";
import { theme } from "@/src/style/theme";
import { Container } from "@/src/style/globalStyle";

export const Section = styled(Container)`
    background-color: ${theme.color.white};
`;

export const Controls = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: ${theme.space[6]};
    border-bottom: 3px solid ${theme.color.grayLight};
    padding: ${theme.space[0]} ${theme.space[10]};
    padding-bottom: ${theme.space[10]};
    @media ${device.md} {
        flex-direction: column;
        align-items: start;
        justify-content: space-between;
    }
`;
