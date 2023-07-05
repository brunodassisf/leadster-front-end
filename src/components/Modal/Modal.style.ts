import styled, { createGlobalStyle } from "styled-components";
import { device } from "@/src/style/device";
import { theme } from "@/src/style/theme";

export const ModalOverlay = styled("div").withConfig({
    shouldForwardProp: (prop) =>
        !["variants", "initial", "animate", "exit", "transition"].includes(
            prop
        ),
})`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(124, 140, 152, 0.8);
    z-index: 999;
`;

export const ModalContent = styled("div").withConfig({
    shouldForwardProp: (prop) =>
        !["variants", "initial", "animate", "exit", "transition"].includes(
            prop
        ),
})`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: ${theme.space[3]};
    border-top: ${theme.space[2]} solid ${theme.color.blue};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    padding-top: ${theme.space[15]};
    max-width: 500px;

    & .close {
        position: absolute;
        top: ${theme.space[3]};
        right: ${theme.space[3]};
        color: ${theme.color.grayLight};
        cursor: pointer;
    }
    iframe {
        width: 100%;
        position: relative;
        top: 0;
        left: 0;
        border: none;
        height: 260px;
        @media ${device.sm} {
            height: 181px;
        }
    }
    @media ${device.sm} {
        width: 90%;
    }
`;

// Impedir scroll da tela
export const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;
