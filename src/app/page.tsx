"use client";

import { styled } from "styled-components";
import { theme } from "../style/theme";

const Title = styled.h1`
    font-size: ${theme.typography.size[3]};
    font-weight: ${theme.typography.weight[3]};
`;

export default function HomeScreen() {
    return (
        <main>
            <Title>Leadster</Title>
        </main>
    );
}
