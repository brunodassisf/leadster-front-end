import styled, { keyframes } from "styled-components";
import { theme } from "@/src/style/theme";
import { device } from "@/src/style/device";

const transitonAnimation = `transition: opacity 0.5s ease;`;
const displayFullSize = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
`;

export const Content = styled.div`
    border-radius: ${theme.space[5]};
    box-shadow: 0px 35px 35px -5px #e9e7e7;
    width: 350px;
    position: relative;
    cursor: pointer;

    & img {
        border-top-right-radius: ${theme.space[5]};
        border-top-left-radius: ${theme.space[5]};
        width: 100%;
        height: auto;
        position: relative;
    }
    & h6 {
        background-color: ${theme.color.white};
        font-weight: ${theme.typography.weight[6]};
        color: ${theme.color.blueDark};
        padding: ${theme.space[9]} ${theme.space[10]};
        font-size: ${theme.typography.size[2]};
        line-height: ${theme.space[9]};
        z-index: 2;
        position: relative;
        border-bottom-left-radius: ${theme.space[5]};
        border-bottom-right-radius: ${theme.space[5]};
    }
    & .icon {
        opacity: 0;
        ${displayFullSize}
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: ${theme.space[29]};
        color: ${theme.color.white};
        z-index: 3;
        ${transitonAnimation}
    }
    &:before {
        content: "";
        ${displayFullSize}
        z-index: 1;
        opacity: 0;
        background-color: ${theme.color.blueLight};
        border-radius: ${theme.space[5]};
        ${transitonAnimation}
    }
    &:hover {
        &:before,
        & .icon {
            opacity: 1;
        }
        & img {
        }
        & h6 {
            color: ${theme.color.blue};
        }
    }
`;
