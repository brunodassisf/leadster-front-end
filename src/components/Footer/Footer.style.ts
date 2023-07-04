import styled from "styled-components";
import { device } from "@/src/style/device";
import { theme } from "@/src/style/theme";
import { Container, Divider } from "@/src/style/globalStyle";

export const FooterContent = styled.footer`
    background-color: ${theme.color.white};
    ${Divider} {
        margin-bottom: ${theme.space[8]};
        background-color: ${theme.color.grayExtraLight};
    }
`;

export const Section = styled(Container)`
    background-color: ${theme.color.white};
    min-height: auto;
    padding-top: ${theme.space[25]};
`;

export const Tag = styled.h5`
    font-weight: ${theme.typography.weight[3]};
    font-size: ${theme.typography.size[0]};
    margin-top: ${theme.space[4]};
    color: ${theme.color.grayLight};
`;

export const ContactSocialMedia = styled.div`
    & h6 {
        font-weight: ${theme.typography.weight[5]};
        font-size: ${theme.typography.size[1]};
        margin-bottom: ${theme.space[10]};
        color: ${theme.color.blueDark};
    }
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    & h6 {
        font-weight: ${theme.typography.weight[5]};
        font-size: ${theme.typography.size[1]};
        margin-bottom: ${theme.space[20]};
        color: ${theme.color.blueDark};
    }
    & a {
        text-decoration: none;
        color: ${theme.color.grayLight};
        font-weight: ${theme.typography.weight[2]};
        margin-bottom: ${theme.space[8]};
    }
`;

export const ManagerLinks = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: ${theme.space[25]};
    @media ${device.md} {
        flex-wrap: wrap;
        // flex-direction: column;
        justify-content: center;
        ${Item}, ${ContactSocialMedia} {
            width: 250px;
        }
    }
    @media ${device.md} {
        gap: ${theme.space[5]};
        ${Item}, ${ContactSocialMedia} {
            margin-bottom: ${theme.space[25]};
        }
    }
`;

export const ContentCopyright = styled(Container)`
    margin: auto;
    padding: ${theme.space[10]} ${theme.space[0]};
    min-height: auto;
    flex-direction: row;
    justify-content: space-between;
    @media ${device.md} {
        justify-content: center;
        gap: ${theme.space[5]};
        flex-direction: column;
        width: 250px;
    }
`;

export const SocialMedia = styled.div`
    display: flex;
    gap: ${theme.space[5]};
    & a {
        width: ${theme.space[20]};
        height: ${theme.space[20]};
        background-color: ${theme.color.grayExtraLight};
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: ${theme.space[30]};
    }
    & svg {
        color: ${theme.color.grayDark};
        font-size: ${theme.typography.size[0]};
    }
`;

export const Contact = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: ${theme.space[10]};
    & span {
        font-weight: ${theme.typography.weight[2]};
        font-size: ${theme.typography.size[1]};
        margin-bottom: ${theme.space[8]};
        color: ${theme.color.grayLight};
        & strong {
            font-weight: ${theme.typography.weight[3]};
            color: ${theme.color.grayDark};
            margin-right: ${theme.space[2]};
        }
    }
`;

export const Copyright = styled.p`
    font-weight: ${theme.typography.weight[2]};
    font-size: ${theme.typography.size[1]};
    color: ${theme.color.grayDark};
    & a {
        text-decoration: none;
        color: ${theme.color.blue};
        margin-left: ${theme.space[3]};
    }
`;

export const Adress = styled.p`
    font-weight: ${theme.typography.weight[1]};
    font-size: ${theme.typography.size[1]};
    color: ${theme.color.grayDark};
    & a {
        text-decoration: none;
        margin-left: ${theme.space[3]};
    }
`;
