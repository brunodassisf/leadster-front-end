import { theme } from "@/src/style/theme";
import styled, { createGlobalStyle } from "styled-components";
import { device } from "./device";

export const GlobalStyle = createGlobalStyle`
  html {
    display: flex;
    min-height: 100%;
    flex-direction: column;
  }
  body {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

`;

export const Container = styled.section`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${theme.space[0]} ${theme.space[2]};
    margin: auto;
    @media ${device.xs} {
        max-width: 100%;
    }
    @media ${device.sm} {
        max-width: 540px;
    }
    @media ${device.md} {
        max-width: 720px;
    }
    @media ${device.lg} {
        max-width: 960px;
    }
    @media ${device.xl} {
        max-width: 1140px;
    }
`;
