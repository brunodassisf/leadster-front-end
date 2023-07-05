import styled from "styled-components";
import { device } from "@/src/style/device";
import { theme } from "@/src/style/theme";

interface IActiveButton {
    active: boolean;
}

export const Nav = styled.nav`
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.space[4]};
`;

export const Button = styled("div").withConfig({
    shouldForwardProp: (prop) => !["active"].includes(prop),
})<IActiveButton>`
    cursor: pointer;
    background-color: ${({ active }) =>
        active ? theme.color.blue : theme.color.white};
    color: ${({ active }) =>
        active ? theme.color.white : theme.color.grayDark};
    border: 1px solid
        ${({ active }) => (active ? theme.color.blue : theme.color.grayDark)};
    font-weight: ${theme.typography.weight[3]};
    border-radius: ${theme.space[20]};
    padding: ${theme.space[3]} ${theme.space[7]};
    font-size: ${theme.typography.size[0]};
    text-decoration: none;
    transition: 400ms;
    &:hover {
        border-color: ${({ active }) =>
            active ? theme.color.white : theme.color.blue};
        color: ${({ active }) =>
            active ? theme.color.white : theme.color.blue};
    }
`;
