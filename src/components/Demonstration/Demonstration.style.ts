import styled from "styled-components";
import Image from "next/image";
import { device } from "@/src/style/device";
import { theme } from "@/src/style/theme";
import { Container } from "@/src/style/globalStyle";

export const Section = styled(Container)`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: ${theme.space[30]} ${theme.space[0]};
`;

export const Background = styled.div`
    background-color: ${theme.color.blueExtraLight};
`;

export const Infos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
`;

export const Action = styled.div`
    display: flex;
    flex-direction: row;
`;

export const FooterInfos = styled.div`
    display: flex;
    flex-direction: row;
`;

export const TitleThree = styled.div`
    position: relative;
`;

export const Text = styled.h3`
    color: #0084ff;
    font-weight: 800;
    font-size: 60px;
    line-height: 52px;
    border-bottom: 0.5px solid #cbd6df;
    margin-bottom: 14px;
    padding: 0px 24px;
    padding-bottom: 22px;
    font-size: ${theme.typography.size[9]};
    @media ${device.sm} {
        white-space: pre-line;
        padding: ${theme.space[0]} ${theme.space[3]};
        font-size: ${theme.typography.size[7]};
    }
`;

export const AssetHeader = styled(Image)`
    top: -${theme.space[4]};
    position: absolute;
    right: -${theme.space[1]};
    @media ${device.sm} {
        top: ${theme.space[2]};
        right: -${theme.space[4]};
        width: ${theme.space[16]};
        height: auto;
    }
`;

export const Paragraph = styled.p`
    color: #4b6170;
    font-weight: ${theme.typography.weight[4]};
    font-size: ${theme.typography.size[1]};
    text-align: center;
    & {
        strong {
            font-weight: ${theme.typography.weight[6]};
        }
    }
`;
