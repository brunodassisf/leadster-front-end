import styled from "styled-components";
import { device } from "@/src/style/device";
import { theme } from "@/src/style/theme";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: fit-content;
    align-items: center;
    gap: ${theme.space[5]};
    & label {
        font-weight: ${theme.typography.weight[5]};
    }
    & .select_component__control {
        border: 2px solid ${theme.color.grayDark};
        border-radius: ${theme.space[6]};
    }
    & .select_component__indicator-separator {
        display: none;
    }
    & .select_component__indicator {
        color: ${theme.color.grayDark};
    }
    & .select_component__placeholder,
    & .select_component__menu {
        font-weight: ${theme.typography.weight[4]};
        color: ${theme.color.grayDark};
    }
    & .select_container {
        min-width: 200px;
        @media ${device.md} {
            width: 100%;
        }
    }
    @media ${device.md} {
        flex-direction: column;
        align-items: start;
        width: 100%;
    }
`;
