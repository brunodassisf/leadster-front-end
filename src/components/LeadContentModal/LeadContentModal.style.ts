import styled from "styled-components";
import { device } from "@/src/style/device";
import { theme } from "@/src/style/theme";

export const LeadDetail = styled.div``;

export const LeadDetailTitle = styled.h4`
    color: ${theme.color.grayDark};
    text-align: center;
    margin-bottom: ${theme.space[10]};
    font-size: ${theme.typography.size[3]};
    width: 280px;
    margin: auto;
    margin-bottom: ${theme.space[15]};
    & span {
        color: ${theme.color.blue};
    }
`;

export const Discription = styled.div`
    padding: ${theme.space[7]} ${theme.space[10]};
    & h6 {
        color: ${theme.color.grayDark};
        font-size: ${theme.typography.size[1]};
        font-weight: ${theme.typography.weight[5]};
        border-bottom: 1px solid ${theme.color.grayLight};
        margin-bottom: ${theme.space[3]};
        padding-bottom: ${theme.space[3]};
    }
    & p {
        color: ${theme.color.grayDark};
        font-size: ${theme.typography.size[1]};
        font-weight: ${theme.typography.weight[3]};
    }
`;

export const ActionsFile = styled.div`
    padding: ${theme.space[7]} ${theme.space[10]};
    & h6 {
        color: ${theme.color.grayDark};
        font-size: ${theme.typography.size[1]};
        font-weight: ${theme.typography.weight[5]};
        border-bottom: 1px solid ${theme.color.grayLight};
        margin-bottom: ${theme.space[8]};
        padding-bottom: ${theme.space[3]};
    }
`;

export const Extensions = styled.div`
    display: flex;
    gap: ${theme.space[3]};
    & a {
        display: flex;
        align-items: center;
        font-weight: ${theme.typography.weight[3]};
        font-size: ${theme.typography.size[0]};
        height: ${theme.space[15]};
        border-radius: ${theme.space[3]};
        padding-right: ${theme.space[5]};
        cursor: pointer;
        text-decoration: none;
        & span {
            height: ${theme.space[15]};
            width: ${theme.space[15]};
            margin-right: ${theme.space[5]};
            display: flex;
            justify-content: center;
            align-items: center;
            border-top-left-radius: ${theme.space[3]};
            border-bottom-left-radius: ${theme.space[3]};
        }
        &:nth-child(1) {
            background-color: ${theme.color.greenLight};
            color: ${theme.color.greenMedium};
            & span {
                background-color: ${theme.color.greenRegular};
            }
        }
        &:nth-child(2) {
            background-color: ${theme.color.skyLight};
            color: ${theme.color.skyMedium};
            & span {
                background-color: ${theme.color.skyRegular};
            }
        }
        &:nth-child(3) {
            background-color: ${theme.color.yellowLight};
            color: ${theme.color.yellowMedium};
            & span {
                background-color: ${theme.color.yellowRegular};
            }
        }
    }
    @media ${device.md} {
        flex-direction: column;
    }
`;
