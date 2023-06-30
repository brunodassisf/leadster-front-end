"use client";

import { styled } from "styled-components";

import { theme } from "@/src/style/theme";
import Header from "@/src/components/Header";

const Title = styled.h1`
    font-size: ${theme.typography.size[3]};
    font-weight: ${theme.typography.weight[3]};
`;

export default function HomeScreen() {
    return (
        <main>
            <Header />
            <Title>Leadster</Title>
        </main>
    );
}
