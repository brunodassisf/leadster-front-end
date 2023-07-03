import styled from "styled-components";
import Image from "next/image";
import { device } from "@/src/style/device";
import { theme } from "@/src/style/theme";
import { Container } from "@/src/style/globalStyle";
import Link from "next/link";

export const Section = styled(Container)`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: ${theme.space[30]} ${theme.space[0]};
    & .comparativo_img {
        width: 50%;
        height: auto;
        margin-right: ${theme.space[10]};
    }
    & hr {
        margin-bottom: ${theme.space[6]};
    }
    @media ${device.md} {
        flex-direction: column;
        text-align: center;
        & .comparativo_img {
            width: 300px;
            height: auto;
            margin-right: ${theme.space[0]} !important;
        }
    }
    @media ${device.lg} {
        & .comparativo_img {
            margin-right: ${theme.space[30]};
        }
    }
`;

export const Background = styled.div`
    background-color: ${theme.color.blueExtraLight};
`;

export const Infos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    @media ${device.md} {
        padding: ${theme.space[0]} ${theme.space[8]};
    }
`;

export const Title = styled.h3`
    font-size: ${theme.typography.size[7]};
    color: ${theme.color.blueDark};
    font-weight: ${theme.typography.weight[3]};
    margin-bottom: ${theme.space[4]};
    & strong {
        display: block;
    }
    @media ${device.md} {
        font-size: ${theme.typography.size[5]};
    }
`;

export const SubTitle = styled.h4`
    color: ${theme.color.blueDark};
    font-size: ${theme.typography.size[4]};
    font-weight: ${theme.typography.weight[3]};
    margin-bottom: ${theme.space[6]};
    @media ${device.md} {
        font-size: ${theme.typography.size[2]};
    }
`;

export const DemonstrationButton = styled(Link)`
    border: none;
    text-decoration: none;
    background-color: ${theme.color.blue};
    color: ${theme.color.white};
    font-weight: ${theme.typography.weight[4]};
    transform: uppercase;
    border-radius: ${theme.space[20]};
    padding: ${theme.space[11]} ${theme.space[15]};
`;

export const Action = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: ${theme.space[7]};
    & button {
        border: none;
        background-color: ${theme.color.blue};
        color: ${theme.color.white};
        font-weight: ${theme.typography.weight[4]};
        transform: uppercase;
        border-radius: ${theme.space[20]};
        padding: ${theme.space[11]} ${theme.space[20]};
    }
    & button,
    & img {
        cursor: pointer;
    }
    @media ${device.md} {
        flex-direction: column;
    }
`;

export const FooterInfos = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${theme.space[1]};
    margin-top: ${theme.space[6]};
    & span {
        color: ${theme.color.blueDark};
        font-size: ${theme.typography.size[0]};
        font-weight: ${theme.typography.weight[5]};
        padding-top: ${theme.space[0]};
        position: relative;
        margin-left: ${theme.space[2]};
    }
    & div:first-child {
        position: relative;
        margin-right: ${theme.space[10]};
        &:after {
            content: "|";
            position: absolute;
            top: 50%;
            right: -${theme.space[6]};
            transform: translateY(-50%);
        }
    }
    @media ${device.md} {
        flex-direction: column;
        & div:first-child {
            margin-right: ${theme.space[0]};
            margin-bottom: ${theme.space[3]};
            &:after {
                content: "";
            }
        }
    }
`;
