import { theme } from "@/src/style/theme";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { device } from "./device";

interface ISkeleton {
    width: string;
    height: string;
}

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

const skeletonAnimation = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

const pulseAnimation = keyframes`
  0% {
    opacity: 0.8;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 0.8;
  }
`;

const SkeletonWrapper = styled.div`
    background: linear-gradient(
        90deg,
        rgba(240, 240, 240, 0.8) 10%,
        rgba(224, 224, 224, 0.8) 30%,
        rgba(240, 240, 240, 0.8) 90%
    );
    background-size: 200px 100%;
    animation: ${skeletonAnimation} 3s infinite linear,
        ${pulseAnimation} 1s infinite ease-in-out;
    border-radius: ${theme.space[5]};
`;

export const Skeleton = styled(SkeletonWrapper)<ISkeleton>`
    display: inline-block;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
`;
