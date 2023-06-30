import styled from "styled-components";
import { device } from "@/src/style/device";
import { theme } from "@/src/style/theme";

export const Container = styled.section`
    background-color: ${theme.color.white};
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${theme.space[0]} ${theme.space[2]};
`;
